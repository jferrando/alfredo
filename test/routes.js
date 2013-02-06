var http = require('express'),
    should = require('should'),
    debug = require('debug')('routes'),
    index = require('../routes'),
    videos = require('../routes/videos');

describe('Routes', function() {
    
    it('should have a route to index',function(done){
        index.index({}, {
            render: function (viewName) {
                viewName.should.equal("index");
                done();
            }
        });
    });
    
    it('should have a route to video',function(done){
        videos.list({}, {
            render: function (viewName) {
                viewName.should.equal("videos");
                done();
            }
        });
    });
});