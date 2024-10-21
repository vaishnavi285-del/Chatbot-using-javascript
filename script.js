const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(message, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.className = sender;
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

function getBotResponse(userMessage) {
    // Simple responses based on user input
    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a bot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm not sure how to respond to that."
    };

    // Return response based on user message or default
    return responses[userMessage] || responses["default"];
}

sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user");
        userInput.value = ""; // Clear input
        
        const botResponse = getBotResponse(userMessage.toLowerCase());
        addMessage(botResponse, "bot");
    }
});

// Optional: Press "Enter" to send a message
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});
