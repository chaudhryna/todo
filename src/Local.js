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
	static editTodo(id) {
		console.log(`From the Local file! ${e.target}`)
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
}

export default Local;