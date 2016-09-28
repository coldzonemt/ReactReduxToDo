import Immutable from 'immutable' 

export default (state = Immutable.List(['Fix more bugs!']), action) => {
	switch (action.type) {
		case 'addTodo': 
			return state.unshift(action.todo)
		case 'deleteTodo': 
			return state.filter((todo, index) => index !== action.index)
		default: 
			return state
	}
}