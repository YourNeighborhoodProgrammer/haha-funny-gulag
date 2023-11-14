'use strict';
const e = document.querySelector(".btnAUS");
e.addEventListener("click", () => {
    chrome.runtime.sendMessage({ message: "change_url", url: 'https://classroom.google.com/u/2/' });
});
