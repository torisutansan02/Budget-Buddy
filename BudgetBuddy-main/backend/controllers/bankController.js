const Bank = require('../models/bankModel');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const ofx = require('ofx');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = 'banks/';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        cb(null, dir);
    },
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage: storage });

const getFiles = async (req, res) => {
    const user_id = req.user._id;
    const files = await Bank.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(files);
};

const getFile = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such file' });
    }

    const file = await Bank.findById(id);

    if (!file) {
        return res.status(404).json({ error: 'No such file' });
    }

    res.status(200).json(file);
};

const parseQFX = (ofxData, user_id, sourceFile) => {
    const transactions = [];

    const bankTransList = ofxData.OFX?.BANKMSGSRSV1?.STMTTRNRS?.STMTRS?.BANKTRANLIST?.STMTTRN;
    if (!Array.isArray(bankTransList)) return transactions;

    bankTransList.forEach(txn => {
        const { DTPOSTED, TRNAMT, NAME, MEMO } = txn;

        const rawDate = DTPOSTED?.split('[')[0];
        const cleanDateStr = rawDate?.slice(0, 14);
        const year = cleanDateStr?.slice(0, 4);
        const month = cleanDateStr?.slice(4, 6);
        const day = cleanDateStr?.slice(6, 8);
        const hour = cleanDateStr?.slice(8, 10);
        const minute = cleanDateStr?.slice(10, 12);
        const second = cleanDateStr?.slice(12, 14);

        const formattedDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

        if (!isNaN(formattedDate) && TRNAMT && NAME && NAME.length > 2) {
            transactions.push({
                user_id,
                description: MEMO ? `${NAME} - ${MEMO}` : NAME,
                amount: parseFloat(TRNAMT),
                date: formattedDate,
                sourceFile
            });
        }
    });

    return transactions;
};

const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No File Uploaded' });
    }

    const user_id = req.user._id;
    const filePath = req.file.path;
    const extension = path.extname(filePath).toLowerCase();

    if (extension !== '.qfx') {
        return res.status(400).json({ error: 'Only QFX files are supported' });
    }

    try {
        const qfxContent = fs.readFileSync(filePath, 'utf8');
        const ofxData = await ofx.parse(qfxContent);
        const transactions = parseQFX(ofxData, user_id, req.file.filename);

        if (!transactions.length) {
            return res.status(400).json({ error: 'No valid transactions found in QFX file' });
        }

        await Bank.insertMany(transactions);

        fs.unlink(filePath, (err) => {
            if (err) console.warn('Failed to delete uploaded file:', err);
        });

        res.status(200).json({ message: 'QFX data imported successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteFile = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such file' });
    }

    const file = await Bank.findOneAndDelete({ _id: id });

    if (!file) {
        return res.status(400).json({ error: 'No such file' });
    }

    res.status(200).json(file);
};

module.exports = {
    upload,
    uploadFile,
    getFiles,
    getFile,
    deleteFile
};