var videos = require('../lib/video-api')();

exports.video = function(req, res){
    var id = req.params.id,
        item = videos.getVideo(id);
    res.render('video', {
        title:'Videos',
        video: item
    });
};