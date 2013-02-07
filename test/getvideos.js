var should = require('should'),
    http = require('http'),
    debug = require('debug')('test'),
    Browser = require('zombie'),
    api = require('../lib/video-api');

describe('library to get videos from some source', function() {
    it('should return 10 videos', function(done) {
        var videos = api.getVideos();
        videos.should.have.lengthOf(10);
        done();
    });
});

describe('index page should have 10 videos', function() {
    before(function(done){
        var app = require('../app');
        http.createServer(app).listen(app.get('port'), function() {
            done();
        });

    });

    it('should return 10 videos', function(done) {
        var videos = api.getVideos();
        videos.should.have.lengthOf(10);
        done();
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