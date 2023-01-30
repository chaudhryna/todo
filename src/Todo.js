class Todo {
	constructor(title, description, dueDate, priority, completed) 
		{
		this.title = title
		this.description = description
		this.dueDate = dueDate
		this.priority = priority
		this.completed = completed
		}
	static addTodo() {
  		console.log(this.title)
	}
	static editTodo() {
		console.log(`Entered edit for ${title}.`)
	}
	static markComplete() {
		console.log(`Completed ${title}.`)
	}
	static deleteTodo = function() {
		console.log(`Deleted ${title}.`)
	}
}
export default Todo;
