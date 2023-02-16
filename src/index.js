import './styles/style.css';
import Todo from './Todo';
import Local from './Local';
import UI from './UI';
import { v4 as uuidv4 } from 'uuid';

import addIcon from './assets/add-solid.svg';
import projectIcon from './assets/folder.svg';
import trash from './assets/trash.svg';
import pencil from './assets/pencil.svg';
import inboxImg from './assets/inbox.svg';


const inbox = document.querySelector('.inbox');
const projectName = document.querySelector('#project-name');
const newProjectBtn = document.querySelector('#newProjectBtn');
const projectForm = document.querySelector('.projectForm');
const projectFormBtn = document.querySelector('#projectFormBtn');
const projectArray = [];
const projectList = document.querySelector('.project-list');
const openTodoForm = document.querySelector('.openTodoForm');
const todoModal = document.querySelector('.todoModal');

// Open the Project form in sidebar
newProjectBtn.addEventListener('click', () => {
	projectForm.classList.toggle('hide');
	projectForm.classList.toggle('show');
	document.querySelector('#project-title').focus();
});

// Load inbox
inbox.addEventListener('click', () => {
	// projectName.textContent = '[inbox.dataset.project]';
	projectName.innerText = 'Inbox';
});


// Load project page
function loadProjectPage(e) {
	console.log(e);
	projectName.innerText = e.target.innerText;
}

// Event listener to open form and create new project
projectFormBtn.addEventListener('click', (e) => {
	projectForm.classList.toggle('hide');
	projectForm.classList.toggle('show');
	e.preventDefault();
	let projectTitle = document.querySelector('#project-title');
	const li = document.createElement('li');
	li.dataset.project = projectTitle.value.toLowerCase();
	li.innerText = projectTitle.value;
	projectArray.push(projectTitle.value);
	li.addEventListener('click', loadProjectPage);
	projectList.appendChild(li);
	projectTitle.value = '';
});

openTodoForm.addEventListener('click', () => {
	todoModal.showModal();
});

// Event: Display all todos
document.addEventListener('DOMContentLoaded', UI.displayTodos)

// Event: Add todo
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const completed = false;
		const todoId = uuidv4();

    // Validate
    if (title === '') {
        // UI.showAlert('Please fill in all fields', 'danger');
    } else {
			// Make a new todo
			const todo = new Todo(title, description, dueDate, priority, completed, todoId);

			// Add todo to list
			UI.addTodoToList(todo);

			// Add todo to localstorage
			Local.addTodo(todo);

			// // Show success message
			// UI.showAlert('Todo Added', 'success')

			// Clear fields
			UI.clearFields();
			todoModal.close();
	}
})

// Cancel button
document.querySelector('.cancel-btn').addEventListener('click', () => {
	UI.clearFields();
	todoModal.close();
})
