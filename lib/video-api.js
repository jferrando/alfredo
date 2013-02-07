var videos = [
     {
        title:'video 1',
        link :'/videos/video-1'
     },
     {
        title:'video 2',
        link :'/videos/video-2'
     },
     {
        title:'video 3',
        link :'/videos/video-3'
     },
     {
        title:'video 4',
        link :'/videos/video-4'
     },
     {
        title:'video 5',
        link :'/videos/video-5'
     },
     {
        title:'video 6',
        link :'/videos/video-6'
     },
     {
        title:'video 7',
        link :'/videos/video-7'
     },
     {
        title:'video 8',
        link :'/videos/video-8'
     },
     {
        title:'video 9',
        link :'/videos/video-9'
     },
     {
        title:'video 10',
        link :'/videos/video-10'
     }
];

module.exports = {
    getVideos: function () {
        return videos;
    },
    getVideo: function (index) {
        return videos[index-1];
    }
};