const sayHiBtn = document.getElementById("sayHiBtn");
const message = document.getElementById("message");

if (sayHiBtn && message) {
  sayHiBtn.addEventListener("click", () => {
    const greetings = [
      "你好呀，很高兴见到你！😄",
      "欢迎来到我的小站！🌟",
      "祝你今天过得开心！☀️",
      "感谢你的到访！💫"
    ];
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    message.textContent = randomGreeting;

    message.style.opacity = 0;
    setTimeout(() => {
      message.style.transition = "opacity 0.6s ease";
      message.style.opacity = 1;
    }, 50);
  });
}
