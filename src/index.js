import './styles/style.css';
import Todo from './Todo';
import Project from './Project';
import Local from './Local';
import UI from './UI';
import { v4 as uuidv4 } from 'uuid';
// the images have to be loaded even if they aren't referenced here!
import addIcon from './assets/add-solid.svg';
import projectIcon from './assets/folder.svg';
import trash from './assets/trash.svg';
import pencil from './assets/pencil.svg';
import inboxImg from './assets/inbox.svg';
import favicon from './assets/favicon.png';
import detail from './assets/detail.svg';

const inbox = document.querySelector('.inbox');
const newProjectBtn = document.querySelector('#newProjectBtn');
const projectForm = document.querySelector('.projectForm');
const projectFormBtn = document.querySelector('#projectFormBtn');
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
	const projectName = document.querySelector('#project-name');
	projectName.innerText = 'Inbox';
	projectName.dataset.project = '';
 	UI.displayTodos();
});


// Event listener to open project form and create new project
projectFormBtn.addEventListener('click', (e) => {
	projectForm.classList.toggle('hide');
	projectForm.classList.toggle('show');
	e.preventDefault();
	const name = document.querySelector('#project-title').value;
	const projectId = uuidv4();
	// Make a new project
	const project = new Project(name, projectId);
	UI.addProjectToList(project);
	Local.addProject(project);
});

openTodoForm.addEventListener('click', () => {
	todoModal.showModal();
	const projects = Local.getProjects();
	const projectSelect = document.querySelector('#project-select');
	let activeProjects = projects.map(project => project);
	let options = activeProjects.map(project => `<option value="${project.projectId}">${project.name}</option>`).join('\n')
  projectSelect.innerHTML = options
});

// Event: Display all todos when page loads
document.addEventListener('DOMContentLoaded', UI.loadPage);

// Event: Add todo
document.querySelector('#todo-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const dueDate = document.querySelector('#dueDate').value;
    const priority = document.querySelector('#priority').value;
    const completed = false;
		const todoId = uuidv4();
		const projectSelect = document.querySelector('#project-select');
    const projectId = projectSelect.value;
		
		// Make a new todo
		const todo = new Todo(title, description, dueDate, priority, completed, todoId, projectId);

		// Add todo to list
		UI.addTodoToList(todo);

		// Add todo to localstorage
		Local.addTodo(todo);

		// Clear fields
		UI.clearFields();
		todoModal.close();
	});

// Cancel button to close add todo modal
document.querySelector('.cancel-btn').addEventListener('click', () => {
	UI.clearFields();
	todoModal.close();
});
