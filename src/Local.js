import UI from "./UI";

// Local class (to access localstorage)
class Local {
	static getTodos() {
		let todos;
		if (localStorage.getItem('todos') === null) {
			todos = [];
		} else {
			todos = JSON.parse(localStorage.getItem('todos'));
		}
		return todos;
	}
	static getProjects() {
		let projects;
		if (localStorage.getItem('projects') === null) {
			projects = [];
		} else {
			projects = JSON.parse(localStorage.getItem('projects'));
		}
		return projects;
	}

	static getTodosByProject(projectId) {
		const todos = Local.getTodos();
		const projectTodos = todos.filter(todo => {
			return todo.projectId === projectId;
		})
		return projectTodos;
	}

	static addTodo(todo) {
		const todos = Local.getTodos();
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	static addProject(project) {
		const projects = Local.getProjects();
		projects.push(project);
		localStorage.setItem('projects', JSON.stringify(projects));
	}

	static editTodo(todoId) {
		const todos = Local.getTodos();

		todos.forEach((todo, index) => {
			if (todo.todoId === todoId) {
				todo.isEditing = true;
				localStorage.setItem('todos', JSON.stringify(todos));
			}
		})
	}

	static detailTodo(todoId) {
		const todos = Local.getTodos();

		const detailTodo = todos.filter(todo => {
			return todo.todoId === todoId;
		})
		return detailTodo;
		// todos.forEach((todo) => {
		// 	if (todo.todoId === todoId) {
		// 		return todo 
		// 	}
		// })
	}

	static deleteTodo(id) {
		const todos = Local.getTodos();
		todos.forEach((todo, index) => {
			if (todo.todoId === id) {
				todos.splice(index, 1);
			}
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	static deleteProject(id) {
		const projects = Local.getProjects();
		projects.forEach((project, index) => {
			if (project.projectId === id) {
				projects.splice(index, 1);
			}
		});
		localStorage.setItem('projects', JSON.stringify(projects));
	}

	static updateTodo(todoId, newTitle, newDescription, newPriority, newDueDate) {
		const todos = Local.getTodos();
		todos.forEach((todo) => {
			if (todo.todoId === todoId) {
				Local.deleteTodo(todo.todoId)
				todo.title = newTitle;
				todo.description = newDescription;
				todo.priority = newPriority;
				todo.dueDate = newDueDate;
				todo.isEditing = false;
				Local.addTodo(todo);
			}
		})
	}
}

export default Local;