
function randomAnswer() {
	chrome.tabs.executeScript(null, {file: "content2.js"});
}

function saveAnswer() {
	chrome.tabs.executeScript(null, {file: "content3.js"});
}

function rightAnswer() {
	chrome.tabs.executeScript(null, {file: "content4.js"});
}

function autoClick() {
	chrome.tabs.executeScript(null, {file: "content1.js"});
}

function listenVocab() {
	chrome.tabs.executeScript(null, {file: "content0.js"});
}

function randomChoice() {
	chrome.tabs.executeScript(null, {file: "content5.js"});
}

function correctChoice() {
	chrome.tabs.executeScript(null, {file: "content6.js"});
}
function phoneticTask() {
	chrome.tabs.executeScript(null, {file: "content7.js"});
}

	document.getElementById('random-answer').addEventListener('click', randomAnswer);
 	document.getElementById('save-answer').addEventListener('click', saveAnswer);
 	document.getElementById('right-answer').addEventListener('click', rightAnswer);
 	document.getElementById('auto-click').addEventListener('click', autoClick);
 	document.getElementById('listen-vocab').addEventListener('click', listenVocab);
 	document.getElementById('random-choice').addEventListener('click', randomChoice);
 	document.getElementById('correct-choice').addEventListener('click', correctChoice);
 	document.getElementById('phonetic').addEventListener('click', phoneticTask);































