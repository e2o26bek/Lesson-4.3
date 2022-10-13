/* Masala 1 */

// let elTodoInput = document.getElementById('todo-title')
// let elError = document.querySelector('.error')
// let elBtn = document.querySelector('.add-todo')
// let elTodoList = document.querySelector('.todo-list')

// function Clicked(e) {
//     e.preventDefault();
//     if (elTodoInput.value == '') {
//         elError.textContent = 'Input bo`sh';
//         setTimeout(() => {
//             elError.textContent = '';
//         }, 3000)
//     } else {
//         let newItems = document.createElement('li');
//         newItems.classList.add('todo-item');

//         let newVal = document.createElement('span');
//         newVal.textContent = elTodoInput.value;

//         let newIcon = document.createElement('span');
//         newIcon.className = 'fa-solid fa-xmark';

//         newItems.appendChild(newVal)
//         newItems.appendChild(newIcon)

//         elTodoList.appendChild(newItems)

//         elTodoInput.value = '';
//     }
// }

// elBtn.addEventListener('click', Clicked)

// elTodoList.addEventListener('click', (a) => {
//     if (a.target.classList[1] == 'fa-xmark') {
//         a.target.parentElement.remove();
//     }
// });


