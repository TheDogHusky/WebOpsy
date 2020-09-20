opsyCore.wallpaperUrl = "https://www.bing.com/th?id=OHR.MistyVineyard_FR-FR8061796111_1920x1080.jpg&rf=LaDigue_1920x1080.jpg&pid=hp"

opsy.setWallpaper = function(wallpaperUrl, callback=false) {
    opsyCore.wallpaperUrl = wallpaperUrl;
    document.body.style.backgroundImage = "url("+opsyCore.wallpaperUrl+")"
}
