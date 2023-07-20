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
        <span class="btn btn-small btn-${notes.completed ? 'warning' : 'success'}"  data-type = 'toggle' data-index = '${notes.id}'>&check;</span>
        <span class="btn btn-small btn-danger"  data-type = 'remove' data-index = '${notes.id}'>&times;</span>
        </span>
    </li>`;
}
/* Функция создает новый объект "заметку" определяет его индекс в массиве заметок,
записывает индекс в соответствующее свойство объекта и возвращает объект */
function createNewNote (input) {
  const newNote = {
      title:`${input.value}`,
      completed: false
  };
  notes.push(newNote);
  newNote.id = notes.indexOf(newNote)
  return newNote;
}

/* Отрисовывает первоначальный шаблон и отрисовывает список заметок заново
если произошло изменение (выполнено\не выполненно, удалено) */
function render() {
  listElement.innerHTML = '';
  for (let [index, note] of notes.entries()){
    note.id = index;
    listElement.insertAdjacentHTML("afterbegin", getTemplate(note));
  };
};

/* Вешаем обработчик события клик на весь список */
listElement.addEventListener('click', event => {
 /*если у элемента накотором сработало событие есть индекс то выполняются дальнейшие инструкции */
  if(event.target.dataset.index){
    const index = Number(event.target.dataset.index);
    const type = event.target.dataset.type;
    /* если тип элемента toggle, то значение свойства объекта массива с индеком такого элемента 
    меняется на противоположное */
    if(type === 'toggle'){
      notes[index].completed = !notes[index].completed
    } else if (type === 'remove') {
      /* Метод массива splice принимает два арг.
      первый: индекс элемента, который мы хотим вырезать
      второй: сколько, начиная с выбранного элемента мы хоти удалить */
      notes.splice(index, 1)
    }
  }
  render();
}) 


addBtn.addEventListener("click", () => {
  if (input.value === "") {
    return;
  } else {
    listElement.insertAdjacentHTML("afterbegin", getTemplate(createNewNote(input)));
  }
  input.value = "";
});

render();

/* Доделать функционал кнопок */
