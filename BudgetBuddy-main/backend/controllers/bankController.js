const Bank = require('../models/bankModel');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const ofx = require('ofx-js'); // Make sure you're using the correct library 'ofx-js'

// Set up Multer for file uploads
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

// Get all files
const getFiles = async (req, res) => {
    const user_id = req.user._id;
    const files = await Bank.find({ user_id }).sort({ createdAt: -1 });
    res.status(200).json(files);
};

// Get a single file
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

// Parse QFX data
const parseQFX = (ofxData, user_id, sourceFile) => {
    const transactions = [];

    // Log the full parsed data to inspect the structure
    console.log("Full parsed OFX data:", JSON.stringify(ofxData, null, 2));

    // Correcting the path to access bank transactions
    const bankTransList = ofxData?.OFX?.BANKMSGSRSV1?.STMTTRNRS?.STMTRS?.BANKTRANLIST?.STMTTRN;

    // Check if the transactions array exists and is not empty
    if (!Array.isArray(bankTransList) || bankTransList.length === 0) {
        console.log("No bank transactions found in QFX file or incorrect structure.");
        return transactions;
    }

    // Proceed with parsing transactions
    bankTransList.forEach(txn => {
        const { DTPOSTED, TRNAMT, NAME, MEMO } = txn;

        // Handle Date Parsing (OFX date format: YYYYMMDDHHMMSS)
        const rawDate = DTPOSTED.split('[')[0]; // Remove timezone info
        const cleanDateStr = rawDate.slice(0, 14); // Extract year, month, day, hour, minute, second
        const year = cleanDateStr.slice(0, 4);
        const month = cleanDateStr.slice(4, 6);
        const day = cleanDateStr.slice(6, 8);
        const hour = cleanDateStr.slice(8, 10);
        const minute = cleanDateStr.slice(10, 12);
        const second = cleanDateStr.slice(12, 14);

        // Construct the date object
        const formattedDate = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);

        if (!isNaN(formattedDate) && NAME.length > 2) {
            transactions.push({
                user_id,
                description: MEMO ? `${NAME} - ${MEMO}` : NAME,
                amount: parseFloat(TRNAMT),
                date: formattedDate,
                sourceFile
            });
        } else {
            console.log("Invalid date or transaction: ", txn);
        }
    });

    if (transactions.length === 0) {
        console.log("No valid transactions found in the file.");
    }

    return transactions;
};

// Handle file upload and parse QFX file
const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No File Uploaded' });
    }

    const user_id = req.user._id;
    const filePath = req.file.path;
    const extension = path.extname(filePath).toLowerCase();

    // Check if the uploaded file is a QFX file
    if (extension !== '.qfx') {
        return res.status(400).json({ error: 'Only QFX files are supported' });
    }

    try {
        // Read the QFX content and parse it
        const qfxContent = fs.readFileSync(filePath, 'utf8');
        const ofxData = await ofx.parse(qfxContent);
        const transactions = parseQFX(ofxData, user_id, req.file.filename);

        // Check if any valid transactions were found
        if (!transactions.length) {
            return res.status(400).json({ error: 'No valid transactions found in QFX file' });
        }

        // Insert transactions into the database
        await Bank.insertMany(transactions);

        // Optionally, delete the uploaded file after processing
        fs.unlink(filePath, (err) => {
            if (err) console.warn('Failed to delete uploaded file:', err);
        });

        res.status(200).json({ message: 'QFX data imported successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a file by ID
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

// Export controller functions :D
module.exports = {
    upload,
    uploadFile,
    getFiles,
    getFile,
    deleteFile
};
