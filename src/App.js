import './App.css';
import {useEffect, useState} from "react";
import TodoCard from "./components/TodoCard";


function App() {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleAddTodo = () => {
		if (inputValue.trim() !== "") {
			setTasks(
				[
					...tasks,
					{
						taskName: inputValue,
						completed: false,
					}
				]
			)
			setInputValue("")
		}
	}
	const handleDeleteTodo = (id) => {
		setTasks(tasks.filter((_, index) => index !== id));
	}
	const handleChangeItem = (item, id) => {
		const updatedTasks = [...tasks]
		updatedTasks[id] = item
		setTasks(updatedTasks)
	}

	useEffect(() => {

	}, []);

	return (

		<div className="w-full py-5 flex flex-col justify-center items-center">


			<h1 className="text-white text-md">Mt Todo app</h1>
			<div className="flex items-center">
				<input id="input" className="py-1 px-2 text-2xl rounded w-[400px] focus:outline-none focus:border-"
				       type="text"
				       placeholder="Type task"
				       value={inputValue}
				       onChange={(e) => setInputValue(e.target.value)}
				       onKeyDown={(e) => {
					       if (e.key === "Enter") handleAddTodo();
				       }}/>
				<button className="ml-2 border border-white py-1.5 text-xl  px-5 text-white rounded"
				        onClick={handleAddTodo}>Add
				</button>
			</div>

			<div className="flex flex-col gap-2 w-[500px] mt-10 ">
				{
					tasks.map((item, index) => (
						<TodoCard key={index} index={index} item={item} handleDeleteTodo={handleDeleteTodo}
						          handleChangeItem={handleChangeItem}>
							{item}
						</TodoCard>
					))
				}
			</div>
		</div>
	)
		;
}

export default App;
