const express = require('express');
const multer = require('multer');
const path = require('path');

const { getVideo, uploadVideo } = require('../controllers/videoControllers')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/videos');
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
});

const upload = multer({ storage });

const router = express.Router();

router.get('/api/video/:filename', getVideo);

router.post('/api/upload',upload.single('video'), uploadVideo);

module.exports = router;
