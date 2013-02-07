var request = require('supertest'),
    should = require('should'),
    debug = require('debug')('test'),
    index = require('../routes'),
    videos = require('../routes/video');

describe('Routes', function() {
    describe('check routes exists', function() {
        it('should have a route to index', function(done) {
            index.index({}, {
                render: function(viewName) {
                    viewName.should.equal("index");
                    done();
                }
            });
        });

        it('should have a route to video', function(done) {
            videos.video({
                params: {
                    id: 1
                }
            }, {
                render: function(viewName) {
                    viewName.should.equal("video");
                    done();
                }
            });
        });
    });
    describe('check express routes routes', function() {
        var app = require('../app');

        it('should have a route to index with status 200', function(done) {
            request(app).get('/').expect(200, done);
        });
        
        it('should have a route to videos/video-:id with status 200', function(done) {
            var i = 10;
            while(i--) {
                request(app).get('/videos/video-' + i).expect(200);
            }
            done();
        });
    });
});