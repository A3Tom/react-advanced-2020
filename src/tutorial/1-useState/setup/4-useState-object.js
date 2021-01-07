import React, { useState } from "react";

// Both ways are fine, can set up as many useState's as you want
const UseStateObject = () => {
	const [person, setPerson] = useState({ name: "peter", age: 24, message: "random message" });

	// const [name, setName] = useState("peter");
	// const [age, setAge] = useState(24);
	// const [message, setMessage] = useState("random message");

	const changeMessage = () => {
		// setMessage("remo");
		setPerson({ ...person, message: "hello World" });
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>

			<button className="btn" onClick={changeMessage}>
				Change Message
			</button>
		</>
	);
};

export default UseStateObject;
