document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt-input');
    const submitButton = document.getElementById('submit-button');
    const chatHistory = document.querySelector('.chat-history');

    const sendMessage = () => {
        const prompt = promptInput.value.trim();
        if (prompt === '') {
            return;
        }

        appendMessage(prompt, 'user-message');
        promptInput.value = '';

        // Mock a bot response
        setTimeout(() => {
            const botResponse = "This is a mocked response from the RAG system. In a real application, this would be the generated answer based on your prompt.";
            appendMessage(botResponse, 'bot-message');
        }, 1000);
    };

    const appendMessage = (text, className) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', className);
        messageElement.textContent = text;
        chatHistory.appendChild(messageElement);
        chatHistory.scrollTop = chatHistory.scrollHeight;
    };

    submitButton.addEventListener('click', sendMessage);

    promptInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            sendMessage();
        }
    });
});