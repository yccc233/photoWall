'use strict';

var path = require("path");
var fs = require("fs");

var {photoPath, photoKinds} = require("../package.json");
var filePath = "./src/photos.json";


fs.readdir(photoPath, function(err, files){
    let photoInfos = [];
    files.forEach(v => {
        if (photoKinds.includes(v.split('.')[v.split('.').length - 1])) {
            photoInfos.push({
                "name": v,
                "title": v,
                "desc": ""
            });
        }
    })
    console.log(photoInfos);

    fs.writeFile(filePath, JSON.stringify(photoInfos, null, 4), { encoding: 'utf8' }, err => {
        console.log("ERROR:", err)
    })
});
