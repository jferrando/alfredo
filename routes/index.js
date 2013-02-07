var videos = require('../lib/video-api');

exports.index = function(req, res){
    var items = videos.getVideos();
    res.render('index', { title: 'Alfredo', videos: items });
};