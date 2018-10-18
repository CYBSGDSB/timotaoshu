"use strict";

const express = require("express");
const path = require('path');
const history = require("connect-history-api-fallback");
const app = express();
const fs = require('fs');
const contentType = {
  "css": "text/css",
  "gif": "image/gif",
  "html": "text/html",
  "ico": "image/x-icon",
  "jpeg": "image/jpeg",
  "jpg": "image/jpeg",
  "js": "text/javascript",
  "json": "application/json",
  "pdf": "application/pdf",
  "png": "image/png",
  "svg": "image/svg+xml",
  "swf": "application/x-shockwave-flash",
  "tiff": "image/tiff",
  "txt": "text/plain",
  "wav": "audio/x-wav",
  "wma": "audio/x-ms-wma",
  "wmv": "video/x-ms-wmv",
  "xml": "text/xml"
};
app.use(history())
const compress = require('compression');
app.use(compress());           //配合nginx做gzip压缩  express4以上写法

const hostArr = require('../../common/host');      //允许访问的域名
app.all('*', function(req, res, next) {
    if(hostArr.indexOf(req.headers.host) == -1) {
        console.error(`${req.headers.host}在${new Date().Format()}访问，已被拦截`);
        res.send("总有刁民想害朕，锦衣卫护驾");
    }  else {
        next();
    }
});


// app.use(express.static("dist"))
app.use('/dist', express.static('../dist/dist'));

app.get('*',function(req, res) {
  const url = req.originalUrl.split('?')[0];
  var html;
  if(!url || url == '/' || url == '/dist' || url == '/dist/' || url.indexOf('/dist') == -1){
    html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8');
  } else {
    return;
  }
  res.send(html);
});

app.listen(9092, () => {
  console.log("正在监听9092");
})


// locaohost:8888
