window.opsy = {}
window.opsyCore = {}

opsyCore.defaultApplicationIcon = "https://www.flaticon.com/svg/static/icons/svg/3524/3524976.svg";

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
    opsyCore.resizeEvent();
}

opsyCore.resizeEvent = function() {
    opsy.screenWidth = window.outerWidth
    opsy.screenHeight = window.outerHeight

    if(opsy.screenWidth<432) {
        opsy.setMobileWallpaper(opsyCore.mobileWallpaperUrl)
    } else {
        opsy.setWallpaper(opsyCore.wallpaperUrl);
    }
}

document.addEventListener("DOMContentLoaded", opsyCore.documentReady)
window.addEventListener("resize", opsyCore.resizeEvent);