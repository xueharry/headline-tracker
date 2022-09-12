chrome.runtime.onInstalled.addListener(() => {
    console.log('Reached!');
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        console.log(url);
    });
    console.log('Did you get it?');
});