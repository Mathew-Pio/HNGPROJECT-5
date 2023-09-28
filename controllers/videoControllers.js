const path = require('path');
const fs = require('fs');
const videoDirectory = path.join(__dirname, '../uploads/videos');

exports.getVideo = (req, res, next) => {
    const filename = req.params.filename;
    // const originalCWD = process.cwd();
    // const newDirectoryPath = 'C:\\Users\\HP\\Desktop\\HNGPROJECT-5';
    // process.chdir(newDirectoryPath);
    const videoPath = path.join(videoDirectory, filename);
    console.log(videoDirectory);
    // Check if the video file exists and is readable
    fs.access(videoPath, fs.constants.F_OK | fs.constants.R_OK, (err) => {
        if (err) {
            // If there's an error, it means the file doesn't exist or is not readable
            // res.status(404).send('Video not found');
            console.log(err);
        } else {
            // The file exists and is readable
            res.status(200).json({ message: 'Video exists', videoUrl: videoPath });
        }
    });

};

exports.uploadVideo = (req, res, next) => {
    if(!req.file){
        return res.status(400).json({error: 'No file uploaded'})
    }

    const videoPath = `/uploads/videos/${req.file.filename}`;
    return res.status(200).json({success:true, videoPath})
}