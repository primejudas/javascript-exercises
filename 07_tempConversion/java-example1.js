const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.classList.add("para");
para.textContent = "hey i am red ";
para.style.color = "red";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.classList.add("h3");
h3.textContent = "hey i am blue h3";
h3.style.color = "blue";
container.appendChild(h3);

const divi = document.createElement("div");
divi.classList.add("divi");
divi.textContent = "what the fuck";
divi.style.cssText = "color: white; background: pink; border: solid black;";
container.appendChild(divi);

const divide = document.createElement("h1");
divide.classList.add("divide");
divide.textContent = "i am a div ";
divi.appendChild(divide);

const paracite = document.createElement("p");
paracite.classList.add("paracite");
paracite.textContent = "ME TOO!";
divi.appendChild(paracite);

const btn = document.querySelector("#btn");
btn.addEventListener("click", function (e) {
  console.log((e.target.style.background = "blue"));
});
