function Button(props){
	function handleClick(){
		alert("Button clicked");
	}
	return (
		<button className="ml-2 border border-white py-1.5 text-xl  px-5 text-white rounded"
		        onClick={handleClick}>
			{props.name ? props.name : "Add"}
		</button>
	)
}

export default Button