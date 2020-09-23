opsyCore.apps = [{id: '11224', htmlBody: "<h1>App de test</h1>", name: "Application test"}]

opsyCore.renderApp = function(app) {
    opsy.warn("render app", "render app function launched");
    opsyCore.documentPuts('<div class="window" id="' + app.id + '"><div class="top-of-window">' + app.name + '</div><div class="app-content">' + app.htmlBody + '</div></div>');
}

opsy.launchApp = function(appId) {
    opsy.info("Launch app", "Launch app function launched");
    for(app in opsyCore.apps) {
        if(app.id == appId) {
            opsyCore.renderApp(app);
            return;
        }
    }
}

