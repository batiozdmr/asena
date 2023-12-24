function createCSSLink() {
    let cssLink = document.createElement('link');
    cssLink.rel = 'stylesheet';
    cssLink.type = 'text/css';
    cssLink.href = 'http://localhost:8000/static/chatbot/0.0.1/chatbot.css'; // CSS dosyanızın yolu
    return cssLink;
}

function createChatbotContainer() {
    let chatbotContainer = document.createElement('div');
    chatbotContainer.className = 'chatbot chatbot--closed';

    let headerDiv = createHeaderDiv();
    let messageWindowDiv = createMessageWindowDiv();
    let entryDiv = createEntryDiv();

    chatbotContainer.appendChild(headerDiv);
    chatbotContainer.appendChild(messageWindowDiv);
    chatbotContainer.appendChild(entryDiv);

    return chatbotContainer;
}

function createHeaderDiv() {
    let headerDiv = document.createElement('div');
    headerDiv.className = 'chatbot__header';

    let headerText = createHeaderText();
    let closeSpeechIcon = createCloseSpeechIcon();
    let closeIcon = createCloseIcon();

    headerDiv.appendChild(headerText);
    headerDiv.appendChild(closeSpeechIcon);
    headerDiv.appendChild(closeIcon);

    return headerDiv;
}


function createHeaderText() {
    let headerText = document.createElement('p');
    headerText.innerHTML = '<strong>Got a question?</strong> <span class="u-text-highlight">Ask Harry</span>';
    return headerText;
}

function createCloseSpeechIcon() {
    let closeSpeechIcon = document.createElement('svg');
    closeSpeechIcon.className = 'chatbot__close-button icon-speech';
    closeSpeechIcon.setAttribute('viewBox', '0 0 32 32');
    return closeSpeechIcon;
}

function createCloseIcon() {
    let closeIcon = document.createElement('svg');
    closeIcon.className = 'chatbot__close-button icon-close';
    closeIcon.setAttribute('viewBox', '0 0 32 32');
    return closeIcon;
}

function createMessageWindowDiv() {
    let messageWindowDiv = document.createElement('div');
    messageWindowDiv.className = 'chatbot__message-window';

    let messagesList = createMessagesList();
    messageWindowDiv.appendChild(messagesList);

    return messageWindowDiv;
}

function createMessagesList() {
    let messagesList = document.createElement('ul');
    messagesList.className = 'chatbot__messages';
    createAIMessage("Hi there 🖐. I’m Harry, your virtual assistant. I'm here to help with your general enquiries.");
    return messagesList;
}

function createAIMessage(text) {
    let aiMessage = document.createElement('li');
    aiMessage.className = 'is-ai animation';

    let profilePicture = createProfilePicture();
    let messageArrow = createMessageArrow();
    let messageText = createMessageText(text);

    aiMessage.appendChild(profilePicture);
    aiMessage.appendChild(messageArrow);
    aiMessage.appendChild(messageText);

    let messagesList = document.querySelector('.chatbot__messages');
    if (messagesList) {
        messagesList.appendChild(aiMessage);
    }

    return aiMessage;
}

function createProfilePicture() {
    let profilePicture = document.createElement('div');
    profilePicture.className = 'is-ai__profile-picture';

    let avatarIcon = createAvatarIcon();
    profilePicture.appendChild(avatarIcon);

    return profilePicture;
}

function createAvatarIcon() {
    let avatarIcon = document.createElement('svg');
    avatarIcon.className = 'icon-avatar';
    avatarIcon.setAttribute('viewBox', '0 0 32 32');
    return avatarIcon;
}

function createMessageArrow() {
    let messageArrow = document.createElement('span');
    messageArrow.className = 'chatbot__arrow chatbot__arrow--left';
    return messageArrow;
}

function createMessageText(text) {
    let messageText = document.createElement('p');
    messageText.className = 'chatbot__message';
    let currentIndex = 0;
    let isBotWriting = false;

    function writeMessage() {
        if (currentIndex < text.length) {
            messageText.textContent += text[currentIndex];
            currentIndex++;
            setTimeout(writeMessage, 15);
        } else {
            isBotWriting = false;
        }
    }
    writeMessage();
    return messageText;
}

function createEntryDiv() {
    let entryDiv = document.createElement('div');
    entryDiv.className = 'chatbot__entry chatbot--closed';

    let inputField = createInputField();
    let submitIcon = createSubmitIcon();

    entryDiv.appendChild(inputField);
    entryDiv.appendChild(submitIcon);

    return entryDiv;
}

function createInputField() {
    let inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.className = 'chatbot__input';
    inputField.placeholder = 'Write a message...';
    return inputField;
}

function createSubmitIcon() {
    let submitIcon = document.createElement('svg');
    submitIcon.className = 'chatbot__submit';
    submitIcon.setAttribute('viewBox', '0 0 32 32');
    return submitIcon;
}


function toggleChatbot() {
    let chatbotContainer = document.querySelector('.chatbot');
    let inputField = document.querySelector('.chatbot__input');

    if (chatbotContainer.classList.contains('chatbot--closed')) {
        chatbotContainer.classList.remove('chatbot--closed');
    } else {
        chatbotContainer.classList.add('chatbot--closed');
    }

    inputField.focus();
}


function initializeChatbot() {
    let chatbotContainer = createChatbotContainer();
    document.body.appendChild(chatbotContainer);

    let cssLink = createCSSLink();
    document.head.appendChild(cssLink);

    let headerDiv = chatbotContainer.querySelector('.chatbot__header');
    headerDiv.addEventListener('click', toggleChatbot, false);

    let inputField = document.querySelector('.chatbot__input');
    inputField && inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            botSendMessage();
        }
    });

}

document.addEventListener('DOMContentLoaded', initializeChatbot);


function botSendMessage() {
    let inputField = document.querySelector('.chatbot__input');
    $.ajax({
        url: "http://api.localhost:8000/asena/",
        method: "POST",
        data: {
            'question': inputField.value,
            'token': asena().token,
        },
        success: function (jsonData) {
            let botMessage = jsonData.content
            createAIMessage(botMessage)
        },
        error: function (data) {
            createAIMessage("Şuanda sizlere hizmet veremiyorum.")
        }
    });
    inputField.value = ""
}
