const todolist=[{name:'Make a To-Do-List',
//     duedate: '2025-6-09'},{name:'Do Exercise',duedate:'2025-12-22'},{name:'Read a Book,duedate:'2025-04-08'},
//     {name:'Visit Anisha Linkedln profile',duedate:'2025-01-01'},{name:' Solve DSA',dueadte:'2025-06-09'}];

// rendertodolist();

// function rendertodolist(){
//    let todolistHTML='';
       
//    todolist.forEach(function(todoobj,index){
//       const {name,duedate}=todoobj;
//       const html=`
//       <div>${name}</div> 
//       <div>${duedate}</div>
//       <button class="delete-todo-button">Delete</button>
//       `;
//       todolistHTML+=html;
//    });
    
//    document.querySelector('.js-todo-list').innerHTML=todolistHTML;

//    document.querySelectorAll('.js-delete-todo-button')
//      .forEach((deletebutton,index)=>{
//       deletebutton.addEventListener('click',()=>{
//          todolist.splice(index,1);
//          rendertodolist();
//        });
//      });

   
// }   

// document.querySelector('.js-add-todo-button')
//    .addEventListener('click',()=>{
//      addtodo();
//    });

// function addtodo(){
//    const inputElement=document.querySelector('.js-name-input');
//    const name=inputElement.value;

//    const dateinputelement=document.querySelector('.js-due-date-input');
//    const duedate=dateinputelement.value;
   
//    todolist.push({
//       name,
//       duedate
//    });
 

//    inputElement.value='';

// if (name !== '' && duedate !== '') {
//     todolist.push({ name, duedate });
//     inputElement.value = '';
//     dateinputelement.value = '';
//     rendertodolist();
//   }
// }

//    rendertodolist();
   

const todolist = [
  { name: 'Make a To-Do List', duedate: '2025-06-09' },
  { name: 'Do Exercise', duedate: '2025-12-22' },
  { name: 'Read a Book', duedate: '2025-04-08' },
  { name: 'Visit Anisha LinkedIn profile', duedate: '2025-01-01' },
  { name: 'Solve DSA', duedate: '2025-06-09' }
];

function rendertodolist() {
  let todolistHTML = '';

  todolist.forEach(function (todoobj, index) {
    const { name, duedate } = todoobj;
    const html = `
      <div>${name}</div> 
      <div>${duedate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `;
    todolistHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todolistHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todolist.splice(index, 1);
        rendertodolist();
      });
    });
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
      addtodo();
    });

  rendertodolist();
});

function addtodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value.trim();

  const dateinputelement = document.querySelector('.js-due-date-input');
  const duedate = dateinputelement.value;

  if (name !== '' && duedate !== '') {
    todolist.push({ name, duedate });
    inputElement.value = '';
    dateinputelement.value = '';
    rendertodolist();
  }
}
