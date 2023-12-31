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
        if (!changeInfo.url.includes('edge://extensions') && !changeInfo.url.includes('chrome://extensions') && !changeInfo.url.includes('docs.google.com') && !changeInfo.url.includes('classroom.google.com'))) {
            chrome.tabs.update(tabId, { url: 'https://classroom.google.com/' });
            alert("Glory To Our Founding Father Valdmir Lenin!");
        }
    }
});

