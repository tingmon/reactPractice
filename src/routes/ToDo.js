import { useState } from "react";
import { Link } from "react-router-dom";

function ToDo() {
	const [todo, setTodo] = useState("");
	const [todoArr, setTodoArr] = useState([]);
	const onChange = (event) => {
		const {
			target: { value },
		} = event;
		setTodo(value);
		// setTodo(event.target.value);
	};
	const onSubmit = (event) => {
		event.preventDefault();
		if (todo === "") {
			return;
		}
		// '...' means dismantle the array shell and take out the elements inside
		setTodoArr((prev) => [todo, ...prev]);
		setTodo("");
	};
	console.log(todoArr);
	return (
		<div>
			<h1>We have {todoArr.length} Things to Do!!</h1>
			<form onSubmit={onSubmit}>
				<input
					value={todo}
					onChange={onChange}
					type="text"
					placeholder="Write your task"
				></input>
				<button>Add task</button>
			</form>
			<hr />
			<ul>
				{todoArr.map((item, index) => (
					<li key={index}>
						{index + 1}. {item}
					</li>
				))}
			</ul>
		</div>
	);
}

export default ToDo;
