"use strict";

const input = document.querySelector(".form-control");
const addBtn = document.querySelector("#create");
const listElement = document.querySelector(".list-group");
const notes = ["Изучить js", "Поесть"];

function render() {
  notes.forEach((element) => {
    listElement.insertAdjacentHTML("afterbegin", getTemplate(element));
  });
}

function getTemplate(title) {
  return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span>${title}</span>
        <span>
        <span class="btn btn-small btn-success">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>`;
}

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    return;
  } else {
    listElement.insertAdjacentHTML("afterbegin", getTemplate(input.value));
  }
  input.value = "";
});

render();
