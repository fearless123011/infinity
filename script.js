const chatBody = document.getElementById("chatBody");
const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");

document.getElementById("year").textContent = new Date().getFullYear();

const sampleReplies = [
  "That's a great question! Infinity is currently a visual demo, so it doesn't connect to an AI model yet. The next step is connecting a real chat backend.",
  "Here's a thought to explore: the best way to understand a big idea is to break it into smaller questions. What part would you like to start with?",
  "Curiosity is a superpower. This preview shows how the conversation will look once the Infinity AI engine is connected."
];

function addMessage(text, className) {
  const message = document.createElement("div");
  message.className = "message " + className;
  message.textContent = text;
  chatBody.appendChild(message);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function sendMessage(text) {
  const cleaned = text.trim();
  if (!cleaned) return;
  const suggestions = chatBody.querySelector(".suggestions");
  if (suggestions) suggestions.remove();
  addMessage(cleaned, "user-message");
  chatInput.value = "";
  const reply = sampleReplies[Math.floor(Math.random() * sampleReplies.length)];
  window.setTimeout(() => addMessage(reply, "assistant-message"), 450);
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendMessage(chatInput.value);
});

document.querySelectorAll(".suggestion").forEach((button) => {
  button.addEventListener("click", () => sendMessage(button.textContent));
});