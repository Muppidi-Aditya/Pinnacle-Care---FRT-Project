let hbChatBoxEle = document.getElementById("hbChatBox");
let hbInputEle = document.getElementById("hbInput");
let hbInputArrowEle = document.getElementById("hbInputArrow");

hbInputArrowEle.onclick = function() {
    let hbChatBoxUserEle = document.createElement("div");
    hbChatBoxUserEle.classList.add("hb-chatbox-user");

    let hbUserChatEle = document.createElement("p");
    hbUserChatEle.textContent = hbInputEle.value;
    hbUserChatEle.classList.add("hb-user-chat");

    let healthBotIcon = document.createElement("img");
    healthBotIcon.src = "assets/user-icon.png";

    hbChatBoxUserEle.appendChild(hbUserChatEle);
    hbChatBoxUserEle.appendChild(healthBotIcon);

    hbChatBoxEle.appendChild(hbChatBoxUserEle);

    hbInputEle.value = "";
};