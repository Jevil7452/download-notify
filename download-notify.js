var downloads = {};

browser.downloads.onChanged.addListener(function reportDownloadEnd(item) {
    if (item.state.current == "complete") {
        browser.notifications.create({
            "type": "basic",
            "iconUrl": browser.extension.getURL("icons/icon-48.png"),
            "title": "Download Completed",
            "message": downloads[item.id]
        });
        delete downloads[item.id];
    }
});
