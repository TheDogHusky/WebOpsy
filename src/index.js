window.opsy = {}
window.opsyCore = {}

opsyCore.callback = function(callback, eventOrArgs=false) {
    if(callback!=false) {
        if(eventOrArgs!=false) {
            callback(eventOrArgs);
            return;
        }
        callback();
    }
}

opsyCore.documentReady = function(e) {
    opsy.setWallpaper(opsyCore.wallpaperUrl);
}

document.addEventListener("DOMContentLoaded", opsyCore.documentReady)