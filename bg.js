'use strict';

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "change_url") {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.update(tabs[0].id, { url: request.url });
            });
        }
    }
);
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url !== undefined && changeInfo.url !== '') {
        if (!changeInfo.url.includes('classroom.google.com') && !changeInfo.url.includes('docs.google.com')) {
            chrome.tabs.update(tabId, { url: 'https://classroom.google.com/u/2/' });
        }
    }
});