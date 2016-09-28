export function addTodo(todo) {
	return {
		type: 'addTodo', 
		todo
	}
}

export function deleteTodo(todo) {
	return {
		type: 'deleteTodo', 
		index
	}
}