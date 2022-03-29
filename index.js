let myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emojiContainer");
const inputField = document.getElementById("emoji-input");
const pushToEndBtn = document.getElementById("push-btn");
const pushToBegin = document.getElementById("unshift-btn");
const removeFromEnd = document.getElementById("pop-btn");
const removeFromBegin = document.getElementById("shift-btn");


function renderEmojis () {
    let emojis = "";
    for (let i = 0; i < myEmojis.length; i++) {
        emojis += `<span id="emojis">${myEmojis[i]}</span>`
    }
    emojiContainer.innerHTML = emojis;  
};

renderEmojis();

pushToEndBtn.addEventListener("click", function(){
    if (inputField.value) {
        myEmojis.push(inputField.value);
        inputField.value = "";
        renderEmojis();
    }
});

pushToBegin.addEventListener("click", function () {
    if (inputField.value) {
        myEmojis.unshift(inputField.value);
        inputField.value = "";
        renderEmojis();
    }
});

removeFromBegin.addEventListener("click", function () {
    myEmojis.shift();
    renderEmojis();
});

removeFromEnd.addEventListener("click", function () {
    myEmojis.pop();
    renderEmojis();

});