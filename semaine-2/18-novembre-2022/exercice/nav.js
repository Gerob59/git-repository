const bodyNav = document.querySelector("body");

const nav = document.createElement("nav");
nav.className = "menu";
bodyNav.append(nav);

const ul = document.createElement("ul");
nav.append(ul);

for (let index = 0; index < 5; index++) {
  let li = document.createElement("li");
  ul.append(li);
  let a = document.createElement("a");
  a.href = `./exercice${index}.html`;
  a.innerText = `Exercice ${index}`;
  li.append(a);
}
