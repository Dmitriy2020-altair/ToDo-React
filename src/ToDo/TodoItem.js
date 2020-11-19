import React, {useContext}  from 'react'
import PropTypes from 'prop-types'
import Context from './Context'


const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5ren 1rem',
		border: '1px solid #ccc',
		borderRadius: '5px',
		marginBottom: '.5rem'
	},
	input: {
		marginRight: '1rem',
		marginLeft: '.5rem',
	}
}

function TodoItem({ todo, index, onChange }) {
	const {removeTodo} = useContext(Context)
	const classes = []

	if (todo.completed) {
		classes.push('done')
	}
	return (
		<li style={styles.li}>
			<span className={classes.join('')}>
				<label>
					<input
						type="checkbox"
						checked={todo.completed} 
						style={styles.input}
						onChange={() => onChange(todo.id)}
				    />
					<strong>{index + 1}</strong>
					&nbsp;
					{todo.title}
				</label>
			</span>
			<button className='btn-delete' onClick={removeTodo.bind(null, todo.id)} >x</button>
		</li>
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,

}
export default TodoItem