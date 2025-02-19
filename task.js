const form = document.getElementById('form-for-task');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('INVIO', form);

  const taskInput = document.getElementById('newtask');
  const taskValue = taskInput.value;
  console.log('Valore', taskValue);

  const taskContainer = document.getElementById('for-new-task');


  const allNewTask = document.createElement('div');
  allNewTask.classList.add('task-to-delete');
  allNewTask.innerHTML = `
    <table>
      <tbody>
        <tr>
          <td>${taskValue}</td>
          <td><button class="buttonForDelete">ELIMINA TASK</button></td>
        </tr>
      </tbody>
    </table>
  `;

  taskContainer.appendChild(allNewTask);

  taskInput.value = '';
  console.log('Nuovo Valore', taskInput.value);
  const deleteButton = allNewTask.querySelector('.buttonForDelete');
  deleteButton.addEventListener('click', (e) => {
    e.preventDefault();
    taskContainer.removeChild(allNewTask);
    console.log('Task eliminata:', taskValue);
  });
});






