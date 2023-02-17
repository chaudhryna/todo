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
	static addTodo(todo) {
		const todos = Local.getTodos();
		todos.push(todo);
		localStorage.setItem('todos', JSON.stringify(todos));
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
	static deleteTodo(id) {
		const todos = Local.getTodos();
		todos.forEach((todo, index) => {
			if (todo.todoId === id) {
				todos.splice(index, 1);
			}
		});
		localStorage.setItem('todos', JSON.stringify(todos));
	}
	static updateTodo(todoId, newTitle, newDescription, newPriority, newDueDate) {
		const todos = Local.getTodos();
		todos.forEach((todo, index) => {
			if (todo.todoId === todoId) {
				todo.title = newTitle;
				todo.description = newDescription;
				todo.priority = newPriority;
				todo.dueDate = newDueDate;
				todo.isEditing = false;
			}
		})
		Local.addTodo(todo);
	}
}

export default Local;