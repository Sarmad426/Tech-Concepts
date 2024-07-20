const socket = new WebSocket("ws://localhost:8080");

const output = document.getElementById("output");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

socket.addEventListener("open", function (event) {
  output.innerHTML += "<p>Connected to WebSocket server</p>";
});

socket.addEventListener("message", function (event) {
  output.innerHTML += "<p>Server: " + event.data + "</p>";
});

sendButton.addEventListener("click", function () {
  const message = messageInput.value;
  socket.send(message);
  output.innerHTML += "<p>You: " + message + "</p>";
  messageInput.value = "";
});

messageInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
