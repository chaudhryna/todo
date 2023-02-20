import Local from "./Local";

// UI class
class UI {
	static loadPage() {
		UI.displayProjects();
		UI.displayTodos();
	}

	static displayTodos() {
		const todoList = document.querySelector('#todo-list');
		todoList.innerHTML = '';
		const todos = Local.getTodos();
		todos.forEach((todo) => UI.addTodoToList(todo))
	}

	static displayProjects() {
		const projectList = document.querySelector('#project-list');
		projectList.innerHTML = '';
		const projects = Local.getProjects();
		projects.forEach((project) => UI.addProjectToList(project));
	}

	// Load project page with it's todos if clicked on
	static loadProjectPage(e) {
		const projectId = e.target.dataset.project;
		const projectName = document.querySelector('#project-name');
		projectName.innerText = e.target.innerText;
		const todoList = document.querySelector('#todo-list');
		todoList.innerHTML = '';
		const projectTodos = Local.getTodosByProject(projectId);
		projectTodos.forEach((todo) => UI.addTodoToList(todo))
	}

	static addTodoToList(todo) {
		const todoList = document.querySelector('#todo-list');
		const row = document.createElement('tr');
		
		if (todo.isEditing === true) {
			const titleTd = document.createElement('td');
			const titleField = document.createElement('input');
			titleField.dataset.title = todo.todoId;
			titleField.type = 'text';
			titleField.value = todo.title;
			titleTd.appendChild(titleField);
			row.appendChild(titleTd);
			
			const descriptionTd = document.createElement('td');
			const descriptionField = document.createElement('input');
			descriptionField.dataset.description = todo.todoId;
			descriptionField.type = 'text';
			descriptionField.value = todo.description;
			descriptionTd.appendChild(descriptionField);
			row.appendChild(descriptionTd);

			const dateTd = document.createElement('td');
			const dueDateField = document.createElement('input');
			dueDateField.dataset.dueDate = todo.todoId;
			dueDateField.type = 'date';
			dueDateField.value = todo.dueDate;
			dateTd.appendChild(dueDateField);
			row.appendChild(dateTd);
			
			const priorityTd = document.createElement('td');
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
			priorityTd.appendChild(prioritySelect);
			row.appendChild(priorityTd);

			// const projectSelect = document.createElement('select');
			// projectSelect.dataset.todo = todo.todoId;

			const updateTd = document.createElement('td');
			const updateBtn = document.createElement('button');
			updateBtn.classList.add('update');
			updateBtn.setAttribute('id', 'updateBtn');
			updateBtn.dataset.todoId = todo.todoId;
			updateBtn.innerText = 'Update';
			updateBtn.addEventListener('click', UI.updateTodo);
			updateTd.appendChild(updateBtn)
			row.appendChild(updateTd);
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
			editBtn.id = todo.todoId;
			const pencil = document.createElement('img');
			pencil.src = './pencil.svg';
			pencil.setAttribute('id', 'editBtn');
			pencil.dataset.todoId = todo.todoId;
			pencil.classList.add('edit');
			pencil.addEventListener('click', UI.editTodo);
			editBtn.appendChild(pencil);
			row.appendChild(editBtn); 
			todoList.appendChild(row);
			
			const detailBtn = document.createElement('td');
			detailBtn.id = todo.todoId;
			const detail = document.createElement('img');
			detail.src = './detail.svg';
			detail.setAttribute('id', 'detailBtn');
			detail.dataset.todoId = todo.todoId;
			detail.classList.add('detail');
			detail.addEventListener('click', UI.detailTodo);
			detailBtn.appendChild(detail);
			row.appendChild(detailBtn); 
			todoList.appendChild(row);
			}
		}

	static addProjectToList(project) {
		const projectTitle = document.querySelector('#project-title');
		const projectList = document.querySelector('#project-list');
		const li = document.createElement('li');
		li.dataset.project = project.projectId;
		li.innerText = project.name;
		li.addEventListener('click', UI.loadProjectPage);
		projectList.appendChild(li);
		projectTitle.innerHTML = '';
	}

	static deleteTodo(e) {
		Local.deleteTodo(e.target.parentElement.id);
		e.target.parentElement.parentElement.remove();
	}

	static updateTodo(e) {
		const updateBtn = e.target;
		const todoId = updateBtn.dataset.todoId;
		console.log(updateBtn.dataset.todoId);
		const titleField = document.querySelector(`[data-title='${todoId}']`);
		const newTitle = titleField.value;
		console.log(newTitle);

		const descriptionField = document.querySelector(`[data-description='${todoId}']`);
		const newDescription = descriptionField.value;
		console.log(newDescription);

		const priorityField = document.querySelector(`[data-priority='${todoId}']`);
		const newPriority = priorityField.value;
		console.log(newPriority);

		const dueDateField = document.querySelector(`[data-due-date='${todoId}']`);
		const newDueDate = dueDateField.value;

		Local.updateTodo(todoId, newTitle, newDescription, newPriority, newDueDate);
		UI.displayTodos();
	}

	static editTodo(e) {
		const editBtn = e.target;
		const todoId = editBtn.dataset.todoId;
		Local.editTodo(todoId);
		UI.displayTodos();
	}

	static detailTodo(e) {
		const todoDetailModal = document.querySelector('.todoDetailModal');
		const todoDetailDiv = document.querySelector('#todoDetail');
		const detailBtn = e.target;
		const todoId = detailBtn.dataset.todoId;
		const todoRecord = Local.detailTodo(todoId);
		const todoDetail = todoRecord[0];
		
		todoDetailDiv.innerHTML = `
		<h3 class="detail-label">Title: <span class="detail-field">${todoDetail.title}</span>
		<h3 class="detail-label">Description: <span class="detail-field">${todoDetail.description}</span></h3>
		<h3 class="detail-label">Due Date: <span class="detail-field">${todoDetail.dueDate}</span></h3>
		<h3 class="detail-label">Priority: <span class="detail-field">${todoDetail.priority}</span></h3>`;
		const closeBtn = document.createElement('button');
		closeBtn.classList.add('close');
		closeBtn.innerText = 'Close';
		closeBtn.addEventListener('click', UI.closeDetailModal);
		todoDetailDiv.appendChild(closeBtn)
		todoDetailModal.showModal();
	}

	static closeDetailModal() {
		console.log(`Close btn clicked.`);
		const todoDetailModal = document.querySelector('.todoDetailModal');
		const todoDetail = document.querySelector('#todoDetail');
		todoDetail.innerHTML = '';
		todoDetailModal.close();
	}

	static clearFields() {
		document.querySelector('#title').value = '';
		document.querySelector('#description').value = '';
		document.querySelector('#dueDate').value = '';
	}
	
}

export default UI;