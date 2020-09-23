opsyCore.wallpaperUrl = "https://www.bing.com/th?id=OHR.MistyVineyard_FR-FR8061796111_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"

opsyCore.mobileWallpaperUrl = "https://wallpapershome.com/images/wallpapers/iceland-1440x2560-4k-5k-wallpaper-road-mountains-clouds-6289.jpg"

opsy.setWallpaper = function(wallpaperUrl, cover=false, callback=false) {
    opsyCore.wallpaperUrl = wallpaperUrl;
    document.body.style.backgroundImage = "url("+opsyCore.wallpaperUrl+")";
    opsyCore.callback(callback);
    if(cover) {
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.backgroundSize = "unset";
    }
}

opsy.setMobileWallpaper = function(wallpaperUrl, cover=false, callback=false) {
    opsyCore.mobileWallpaperUrl = wallpaperUrl;
    document.body.style.backgroundImage = "url("+opsyCore.mobileWallpaperUrl+")";
    if(cover) {
        document.body.style.backgroundSize = "cover";
    } else {
        document.body.style.backgroundSize = "unset";
    }
    opsyCore.callback(callback);
}
