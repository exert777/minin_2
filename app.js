"use strict";

const input = document.querySelector(".form-control");
const addBtn = document.querySelector("#create");
const listElement = document.querySelector(".list-group");
const notes = [
  {
    title: "Изучить js",
    completed: true
  }, 
  {
    title:"Поесть",
    completed: false
  },
];

function getTemplate(notes) {

  /*Применение ТЕРНАРНОГО ВЫРАЖЕНИЯ для быстрой проверка свойства competed у объекта заметки, 
  если true надпись зачеркивается  */
  return `
    <li
        class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span class = ${notes.completed ? 'text-decoration-line-through' : ''}>${notes.title}</span>
        <span>
        <span class="btn btn-small btn-${notes.completed ? 'warning' : 'success'}">&check;</span>
        <span class="btn btn-small btn-danger">&times;</span>
        </span>
    </li>`;
}

function render() {
  /* notes.forEach((element) => {
    listElement.insertAdjacentHTML("afterbegin", getTemplate(element));
  }); */
  for (let [index, note] of notes.entries()){
    note.id = index;
    listElement.insertAdjacentHTML("afterbegin", getTemplate(note));
  };
};



addBtn.addEventListener("click", () => {
  if (input.value === "") {
    return;
  } else {

    const newNote = {
        title:`${input.value}`,
        completed: true
    } 

    listElement.insertAdjacentHTML("afterbegin", getTemplate(newNote));

    notes.push(newNote);

    /* render(); */
  }
  input.value = "";
});

render();


/* Сделать добавление индекса каждому новому объекту */
