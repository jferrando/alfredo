var should = require('should'),
    http = require('http'),
    debug = require('debug')('test'),
    Browser = require('zombie');

describe('library to get videos from array source', function() {
    var api = null;

    before(function(){
        api = require('../lib/video-api')('array');
    });

    it('should return 10 videos', function(done) {
        var videos = api.getVideos();
        videos.should.have.lengthOf(10);
        done();
    });

    it('should return 1 video from 1 to 10', function(done) {
        for(var i = 1;i<=10;i++) {
            var video = api.getVideo(i);
            video.should.have.property('title');
        }
        done();
    });
});

describe('library to get videos from file source', function() {
    var api = require('../lib/video-api')('file');

    it('should return 10 videos', function(done) {
        api.getVideos(function(err,videos){
            if (err) {
                console.error(err);
                console.trace(err.Stack);
                done();
            }
            videos.should.have.lengthOf(10);
            done();
        });
    });

    it('should return 1 video from 1 to 10', function(done) {
        var j=0;
        for(var i=1; i<=10;i++) {
            api.getVideo(i,function(err,video){
                if (err) {
                    console.error(err);
                    console.trace(err.Stack);
                    done();
                }
                video.should.have.property('title');
                j++;
                if (j>9) {
                    done();
                }
            });
        }
    });
});

describe('index page should have 10 videos', function() {
    before(function(done){
        var app = require('../app');
        http.createServer(app).listen(app.get('port'), function() {
            done();
        });

    });

    it('should have 10 titles and 10 links in index page',function(done){
        var browser = new Browser();
        browser.visit("http://localhost:3000/", function () {
            var titles = browser.queryAll(".title");
            titles.should.have.lengthOf(10);
            var links = browser.queryAll(".link");
            links.should.have.lengthOf(10);
            done();
        });
    });
});