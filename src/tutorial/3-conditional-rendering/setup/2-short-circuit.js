import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
	const [text, setText] = useState("");
	const [isError, setIsError] = useState(false);

	const firstValue = text || "hello world";
	const secondValue = text && "hello world";

	return (
		<>
			<h1>{firstValue}</h1>
			<h1>value : {secondValue}</h1>

			<h1>{text || "Remo"}</h1>
			{text && <h1>Hello World</h1>}
			{!text && <h1>Hello World</h1>}

			<button className="btn" onClick={() => setIsError(!isError)}>
				Clickity click, motha fucka
			</button>
			{isError && <h1>Error ...</h1>}
			{isError ? (
				<p>There's an error mate</p>
			) : (
				<div>
					<p>Everything is sound</p>
				</div>
			)}
		</>
	);
};

export default ShortCircuit;
