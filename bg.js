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
        if (!changeInfo.url.includes('edge://extensions') && !changeInfo.url.includes('chrome://extensions') && !changeInfo.url.includes('docs.google.com') && !changeInfo.url.includes('youtube.com') && !changeInfo.url.includes('classroom.google.com') && !changeInfo.url.includes('imois.in') && !changeInfo.url.includes('github.com') || changeInfo.url.includes('classroom.google.com/u/2/c/NjE3MzU2Mjc3ODUx')) {
            chrome.tabs.update(tabId, { url: 'https://classroom.google.com/u/2/' });
            alert("Glory To Our Founding Father Valdmir Lenin!");
        }
    }
});

