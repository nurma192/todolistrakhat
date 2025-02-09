import React from 'react';

function TodoCard({item, index, handleDeleteTodo, handleChangeItem, ...props}) {
	const toggleDone = () => {
		item.completed = !item.completed;
		handleChangeItem(item, index);
	}

	return (
		<div id='todoCard' className={` w-full flex rounded px-2 py-4 border-2 text-white bg-neutral-600 ${item.completed ? 'bg-[#3cdb7670]' : 'border-gray-200'} opacity-1`}>
			<h3 className={`capitalize w-[400px] overflow-hidden ${item.completed && 'line-through italic'}`}>{item.taskName}</h3>
			<div className="ml-auto flex gap-2 justify-end">
				<button
					className={`cursor-pointer rounded-3xl  hover:text-green-500 hover:scale-125 transition`}
					onClick={() => toggleDone()}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
				</button>
				<button className="cursor-pointer hover:text-red-500 hover:scale-125 transition"
				        onClick={() => handleDeleteTodo(index)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 " viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/></svg>
				</button>
			</div>
		</div>
	);
}

export default TodoCard;
