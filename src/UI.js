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
            <td>${todo.priority}</td>`;
			const deleteBtn = document.createElement('td');
			deleteBtn.id = todo.todoId;
			const trashCan = document.createElement('img');
			trashCan.src = './trash.svg';
			trashCan.setAttribute('id', 'deleteBtn');
			trashCan.classList.add('delete');
			trashCan.addEventListener('click', UI.deleteTodo);
			deleteBtn.appendChild(trashCan);
			row.appendChild(deleteBtn);
			
			const editBtn = document.createElement('td');
			const pencil = document.createElement('img');
			pencil.src = './pencil.svg';
			pencil.setAttribute('id', 'editBtn');
			pencil.classList.add('edit');
			pencil.addEventListener('click', UI.editTodo);
			editBtn.appendChild(pencil);
			row.appendChild(editBtn); 
		
		todoList.appendChild(row);
	}

	static deleteTodo(e) {
		Local.deleteTodo(e.target.parentElement.id);
		
		e.target.parentElement.parentElement.remove();
	}

	static editTodo(e) {
		console.log(`From the UI file ${e.target}`);
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