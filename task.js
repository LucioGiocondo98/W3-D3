const form = document.getElementById('form-for-task')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('INVIO',form)

const taskInput = document.getElementById('newtask')
 let taskValue = taskInput.value;
 console.log('Valore',taskValue)
 
 const allNewTask = document.createElement('table')
 allNewTask.classList.add('task-to-delete')
 allNewTask.innerHTML = `
 <tbody>
 <tr>
 <td>${taskValue}</td>
 </tr>
 <button> ELIMINA</button>
 </tbody>
 `
 const taskContainer =document.getElementById('for-new-task')
 taskContainer.appendChild(allNewTask)

 taskInput.value = '';
 console.log('Nuovo Valore',taskInput)

 
});


