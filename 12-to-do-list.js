//const todoList=[];//empty array

const todolist=[{name:'make dinner',
    duedate: '2022-12-22'},{name:'wash dishes',duedate:'2025-12-22'}];

rendertodolist();

function rendertodolist(){
   let todolistHTML='';
       
   todolist.forEach(function(todoobj,index){
      const {name,duedate}=todoobj;
      const html=`
      <div>${name}</div> 
      <div>${duedate}</div>
      <button class="delete-todo-button">Delete</button>
      `;
      todolistHTML+=html;
   });
   document.querySelector('.js-todo-list').innerHTML=todolistHTML;

   document.querySelectorAll('.js-delete-todo-button')
     .forEach((deletebutton,index)=>{
      deletebutton.addEventListener('click',()=>{
         todolist.splice(index,1);
         rendertodolist();
       });
     });

   
}   
   // for(let i=0;i<todolist.length;i++){
   //    const todoobject=todolist[i];
   //   // const name=todoobject.name;
   //    //const duedate=todoobject.duedate;
   //       const {name,duedate}=todoobject}


   //    const html=`
   //    <div>${name}</div> 
   //    <div>${duedate}</div>
   //    <button onclick="
   //        todolist.splice(${index},1);
   //        rendertodolist();
   //    "class="delete-todo-button js-delete-todo-button">Delete</button>
   //    `;
   //    todolistHTML+=html;
   

   // document.querySelector('.js-todo-list').innerHTML=todolistHTML;


document.querySelector('.js-add-todo-button')
   .addEventListener('click',()=>{
     addtodo();
   });

function addtodo(){
   const inputElement=document.querySelector('.js-name-input');
   const name=inputElement.value;

   const dateinputelement=document.querySelector('.js-due-date-input');
   const duedate=dateinputelement.value;
   
   todolist.push({
      //name:name,
     // duedate:duedate,
      name,
      duedate
   });
 

   inputElement.value='';

   rendertodolist();
   
}