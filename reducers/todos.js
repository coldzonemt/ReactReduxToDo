import Immutable from 'immutable' 

export default (state = Immutable.List(['Fix more bugs!']), action) => {
	switch (action.type) {
		case 'addTodo': 
			return states.push(action.todo)
		default: 
			return state
	}
}