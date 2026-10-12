const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Predefined Responses
const botResponses = {
    "hello": "Hello Saad! How can I assist you with CodeAlpha projects today?",
    "hi": "Hey there! How can I help you?",
    "who are you": "I am CodeAlpha's AI Chatbot built for Cloud Computing tasks!",
    "what is cloud computing": "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, and software—over the Cloud (Internet).",
    "internship": "You are currently doing the CodeAlpha Cloud Computing Internship!",
    "help": "You can ask me about Cloud Computing, CodeAlpha, or general greetings!",
    "default": "I'm sorry, I didn't quite understand that. Try asking about 'cloud computing', 'internship', or say 'hello'!"
};

function sendMessage() {
    const messageText = userInput.value.trim();
    if (messageText === "") return;

    appendMessage(messageText, 'user-message');
    userInput.value = '';

    setTimeout(() => {
        const botReply = getBotResponse(messageText.toLowerCase());
        appendMessage(botReply, 'bot-message');
    }, 600);
}

function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    for (let key in botResponses) {
        if (input.includes(key)) {
            return botResponses[key];
        }
    }
    return botResponses["default"];
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});