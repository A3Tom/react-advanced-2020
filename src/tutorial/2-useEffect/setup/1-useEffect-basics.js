import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter

const UseEffectBasics = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		console.log("call useEffect");

		if (value >= 1) {
			document.title = `New Messages(${value})`;
		}
	}, [value]);

	useEffect(() => {
		// This only runs once, can have multiple of the same useEffect method ... Javascript is off the fuckin rails man
		console.log("Hello world");
	}, []);

	console.log("render component");

	return (
		<>
			<h1>{value}</h1>
			<button
				className="btn"
				onClick={() => {
					setValue(value + 1);
				}}
			>
				hings
			</button>
		</>
	);
};

export default UseEffectBasics;
