// This file contains the JavaScript logic for the chat bubble popup feature.
// It handles the functionality for opening and closing the chat bubble,
// as well as interactions within the bubble, such as sending messages.

document.addEventListener('DOMContentLoaded', () => {
    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    chatBubble.innerHTML = `
        <div class="chat-header">Chat</div>
        <div class="chat-messages" id="chat-messages"></div>
        <div class="input-area">
            <input type="text" id="message-input" placeholder="Type your message..." autocomplete="off">
            <button id="send-button">Send</button>
        </div>
    `;
    document.body.appendChild(chatBubble);

    const chatMessages = document.getElementById('chat-messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    chatBubble.style.display = 'none'; // Initially hidden

    // Function to toggle chat bubble visibility
    function toggleChatBubble() {
        chatBubble.style.display = chatBubble.style.display === 'none' ? 'block' : 'none';
    }

    // Function to send a message
    function sendMessage() {
        const message = messageInput.value.trim();
        if (!message) return;

        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot-message';
            botMessageElement.textContent = 'Bot: ' + message; // Echoing user message for demo
            chatMessages.appendChild(botMessageElement);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
        }, 1000);
    }

    // Event listeners
    document.addEventListener('click', (event) => {
        if (event.target.matches('.chat-bubble-toggle')) {
            toggleChatBubble();
        }
    });

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });
});