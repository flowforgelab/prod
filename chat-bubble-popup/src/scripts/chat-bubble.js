document.addEventListener('DOMContentLoaded', () => {
    const chatBubble = document.createElement('div');
    chatBubble.className = 'chat-bubble';
    chatBubble.style.display = 'none';
    chatBubble.innerHTML = `
      <div class="chat-header">NueSynergy Support</div>
      <div class="chat-messages" id="chat-messages"></div>
      <div class="input-area">
        <input type="text" id="message-input" placeholder="Type your question..." autocomplete="off">
        <button id="send-button">➤</button>
      </div>
    `;
    document.body.appendChild(chatBubble);
  
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const chatMessages = document.getElementById('chat-messages');
  
    const sessionId = 'session_' + Date.now();
    const queryEndpoint = 'https://n8n.flowforgelab.com/webhook/nuesynergy';
  
    const toggleBtn = document.querySelector('.chat-bubble-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        chatBubble.style.display = chatBubble.style.display === 'none' ? 'flex' : 'none';
      });
    }
  
    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });
  
    async function sendMessage() {
      const message = messageInput.value.trim();
      if (!message) return;
  
      addMessage(message, 'user');
      messageInput.value = '';
  
      const thinking = document.createElement('div');
      thinking.className = 'thinking';
      thinking.textContent = 'Thinking...';
      chatMessages.appendChild(thinking);
      chatMessages.scrollTop = chatMessages.scrollHeight;
  
      try {
        const response = await fetch(queryEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chatInput: message,
            sessionId,
            timestamp: new Date().toISOString()
          })
        });
  
        const data = await response.json();
        chatMessages.removeChild(thinking);
  
        let botResponse = data?.message?.content || data?.content || JSON.stringify(data);
        const sources = data.sources || data.combinedFilePath?.split('\n') || [];
  
        addMessage(botResponse, 'bot', sources);
      } catch (e) {
        chatMessages.removeChild(thinking);
        addMessage("I'm having trouble connecting to the server. Please try again later.", 'bot');
      }
    }
  
    function addMessage(message, sender, sources = []) {
      const messageElement = document.createElement('div');
      messageElement.className = `message ${sender}-message`;
  
      messageElement.innerHTML = sender === 'bot' ? marked.parse(message) : message;
  
      if (sources.length > 0) {
        const sourceBlock = document.createElement('div');
        sourceBlock.className = 'sources';
        sourceBlock.textContent = 'Sources: ' + [...new Set(sources)].join(', ');
        messageElement.appendChild(sourceBlock);
      }
  
      chatMessages.appendChild(messageElement);
      chatMessages.scrollTo({ top: chatMessages.scrollHeight, behavior: 'smooth' });
    }
  });