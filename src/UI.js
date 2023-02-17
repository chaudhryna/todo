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
		
		if (todo.isEditing === true) {
			const titleField = document.createElement('input');
			titleField.dataset.title = todo.todoId;
			titleField.type = 'text';
			titleField.value = todo.title;
			row.appendChild(titleField);
			const descriptionField = document.createElement('input');
			descriptionField.type = 'text';
			descriptionField.dataset.description = todo.todoId;
			descriptionField.value = todo.description;
			row.appendChild(descriptionField);
			const dueDateField = document.createElement('input');
			dueDateField.type = 'date';
			dueDateField.dataset.dueDate = todo.todoId;
			dueDateField.value = todo.dueDate;
			row.appendChild(dueDateField);
			const prioritySelect = document.createElement('select');
			prioritySelect.dataset.priority = todo.todoId;
			const highOption = document.createElement('option');
			highOption.value = 'high';
			highOption.innerText = 'High';
			const mediumOption = document.createElement('option');
			mediumOption.value = 'medium';
			mediumOption.innerText = 'Medium';
			const lowOption = document.createElement('option');
			lowOption.value = 'low';
			lowOption.innerText = 'Low';
			prioritySelect.appendChild(highOption);
			prioritySelect.appendChild(mediumOption);
			prioritySelect.appendChild(lowOption);
			row.appendChild(prioritySelect);
			const updateBtn = document.createElement('button');
			updateBtn.setAttribute('id', 'updateBtn');
			updateBtn.dataset.todoId = todo.todoId;
			updateBtn.innerText = 'Update';
			updateBtn.addEventListener('click', UI.updateTodo);
			row.appendChild(updateBtn);
			todoList.appendChild(row);
		} else {
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
			pencil.dataset.todoId = todo.todoId;
			pencil.classList.add('edit');
			pencil.addEventListener('click', UI.editTodo);
			editBtn.appendChild(pencil);
			row.appendChild(editBtn); 
		
			todoList.appendChild(row);
			}
		}

	static deleteTodo(e) {
		Local.deleteTodo(e.target.parentElement.id);
		
		e.target.parentElement.parentElement.remove();
	}

	static updateTodo(e) {
		const updateBtn = e.target;
		const todoId = updateBtn.dataset.todoId;
		const titleField = document.querySelector(`[data-title='${todoId}']`);
		const newTitle = titleField.value;

		const descriptionField = document.querySelector(`[data-description='${todoId}']`);
		const newDescription = descriptionField.value;

		const priorityField = document.querySelector(`[data-priority='${todoId}']`);
		const newPriority = priorityField.value;

		const dueDateField = document.querySelector(`[data-dueDate='${todoId}']`);
		console.log(dueDateField.value);
		const newDueDate = dueDateField.value;

		updateTodo(todoId, newTitle, newDescription, newPriority, newDueDate);
		Local.updateTodo(todoId, newTitle, newDescription, newPriority, newDueDate);
		UI.displayTodos();
	}

	static editTodo(e) {
		const editBtn = e.target;
		const todoId = editBtn.dataset.todoId;
		Local.editTodo(todoId);
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