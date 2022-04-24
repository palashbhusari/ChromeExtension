// background is running as a part of whole browser
//debug will not apear in javascript console for the given page
// debug console can be seen in extensions page - "instpect background page"

console.log("Background.js ->");

chrome.action.onClicked.addListener(()=> { 
    console.log("clicked"); 
    chrome.tabs.query({active: true, currentWindow: true}, 
        function(tabs) {
        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        let url = tabs[0].url;
        console.log("URL -")
        console.log(url)
     });
});

