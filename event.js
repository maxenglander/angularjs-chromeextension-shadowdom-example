chrome.alarms.create('switch', {
    when: Date.now() + 10000,
    periodInMinutes: 1
});
chrome.alarms.onAlarm.addListener(function (alarmInfo) {
    if ('switch' === alarmInfo.name) {
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function (results) {
            if (!results || results.length === 0)  return
            console.log('sending switch message to', results[0].id);
            chrome.tabs.sendMessage(results[0].id, 'switch');
        });
    }
});
