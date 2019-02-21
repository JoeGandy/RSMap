
var Crawler = require("crawler");


Array.prototype.clean = function(deleteValue) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == deleteValue) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
};


function makeSafeForCSS(name) {
    return name.replace(/[^a-z0-9]/g, function(s) {
        var c = s.charCodeAt(0);
        if (c == 32) return '-';
        if (c >= 65 && c <= 90) return '_' + s.toLowerCase();
        return '__' + ('000' + c.toString(16)).slice(-4);
    });
}

var http = require('https');
var fs = require('fs');

var download = function(url, dest, cb) {
    var file = fs.createWriteStream(dest);
    var request = http.get(url, function(response) {
        response.pipe(file);
        file.on('finish', function() {
            file.close(cb);
        });
    });
}


function getBaseSettings(image_name, type, text, safe_name){
    let folder = __dirname + '/../../static/icons/';
    //let folder = __dirname + '/test/';
    return {
        url: folder + type + '/' + image_name,
        className: 'teleport ' + safe_name,
        iconText: text
    }
}

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        let result = {};
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            $(".wikitable > tbody > tr").each(function( index ) {
                let tds = $(this).find('td');
                let img = $(tds[0]).find('img').attr('data-cfsrc');
                let text = $(tds[1]).text();
                if(img === undefined) return true;;
                let lines = text.split("\n").clean('');
                let img_name = img.split("/").slice(-1)[0].split("?")[0];
                let img_url = "https://oldschool.runescape.wiki" + img;
                for(let line of lines){
                    download(img_url, __dirname + "/../../static/icons/teleport/" + img_name);
                    let safe_line = makeSafeForCSS(line);
                    result[safe_line] = getBaseSettings(img_name, 'teleport', text, safe_line);
                }
            });
        }
        done(result);
    }
});

function done(result){
    console.log(result);
}
c.queue(['https://oldschool.runescape.wiki/w/Teleportation']);