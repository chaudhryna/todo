import Local from "./Local";

// UI class
class UI {
	static displayTodos() {
		const todos = Local.getTodos();
        
		todos.forEach((todo) => UI.addTodoToList(todo))
	}

	static addTodoToList(todo) {
		const todoList = document.querySelector('#todo-list');
		const row = document.createElement('tr');
		
		row.innerHTML = `
            <td>${todo.title}</td>
            <td>${todo.dueDate}</td>
            <td>${todo.priority}</td>
			<td><img src="./trash.svg" class="icon btn delete" title="Delete" id="deleteBtn" /></td>
			<td><img src="./pencil.svg" class="icon btn edit" title="Edit" id="editBtn" />
			</td>`; 

		todoList.appendChild(row);
	}

	static deleteTodo(el) {
		if (el.classList.contains('delete')) {
			el.parentElement.parentElement.remove();
		}
	}

	// static showAlert(message, className) {
	// 	const div = document.createElement('div');
	// 	div.className = `alert alert-${className}`;
	// 	div.appendChild(document.createTextNode(message));
	// 	const container = document.querySelector('.container');
	// 	const form = document.querySelector('#book-form');
	// 	container.insertBefore(div, form);
	// 	// Remove alert after 3 seconds
	// 	setTimeout(() => document.querySelector('.alert').remove(), 3000);
	// }

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#description').value = '';
		document.querySelector('#dueDate').value = '';
	}
}

export default UI;