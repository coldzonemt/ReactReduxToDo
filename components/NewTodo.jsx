import React from 'react' 

const NewTodo = ({onChange}) => (
	<div>
		<h3>New Todo Item</h3>
		<input type="text" onKeyUp={onChange}/>
	</div>
)

export default NewTodo