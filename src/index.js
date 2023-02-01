import './styles/style.css';
import Todo from "./Todo";
import addIcon from './assets/add-solid.svg';
import projectIcon from './assets/folder.svg';

const openTodoForm = document.querySelector('.openTodoForm');
const todoModal = document.querySelector('.todoModal');
const todoForm = document.querySelector('#todo-form');
const newProjectBtn = document.querySelector('#newProjectBtn');
const projectForm = document.querySelector('.projectForm');
const projectFormBtn = document.querySelector('#projectFormBtn');
const projectArray = [];
const projectList = document.querySelector('.project-list');
const inbox = document.querySelector('.inbox');
const projectName = document.querySelector('#project-name');

// Open the Project form in sidebar
newProjectBtn.addEventListener('click', () => {
    projectForm.classList.toggle('hide');
	projectForm.classList.toggle('show');
    document.querySelector('#project-title').focus();
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

// Event listener for Todo form
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const description = document.querySelector('#description').value;
    const priority = document.querySelector('#priority').value;
    const completed = false;
    
    const todo = new Todo(
        title,
        description,
        dueDate,
        priority,
        completed,
    );
    console.log(todo);
    todoModal.close();
});

// Load inbox 
inbox.addEventListener('click', () => {
    projectName.textContent = '[inbox.dataset.project]';
    projectName.innerText = 'Inbox';
})

document.addEventListener('DOMContentLoaded', projectName.innerText = 'Inbox');