const express = require('express');
const videoRoutes = require('./routes/videoRoutes')

const app = express();

app.use(videoRoutes);

app.use(express.json());
// Serve uploaded video files
app.use('/uploads/videos', express.static('uploads/videos'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})

