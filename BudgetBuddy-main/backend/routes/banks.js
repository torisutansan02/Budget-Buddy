const express = require('express')
const { 
    upload,
    uploadFile,
    getFiles,
    getFile,
    deleteFile
} = require('../controllers/bankController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// Require Auth for all bank routes
router.use(requireAuth)

// GET all files
router.get('/', getFiles);

// GET a single file
router.get('/:id', getFile);

// POST a file upload
router.post('/', upload.single('file'), uploadFile);

// DELETE a file
router.delete('/:id', deleteFile);

module.exports = router