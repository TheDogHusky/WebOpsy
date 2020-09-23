opsyCore.apps = [{id: '11224', htmlBody: "<h1>App de test</h1>", name: "Application test"}]


opsyCore.launchApp = function(appId) {
    for app in opsyCore.apps {
        if(app.id == appId) {
            opsyCore.renderApp(app);
            return;
        }
    }
}

opsyCore.renderApp = function(app) {
    document.writeln('<div class="window" id="' + app.id + '"><div class="top-of-window">' + app.name + '</div><div class="app-content">' + app.htmlBody + '</div></div>')
}