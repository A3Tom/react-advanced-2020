import React, { useState } from "react";

const UseStateBasics = () => {
	const [text, setText] = useState("Big pope franco revampin the pope's hoos day by day");

	const handleClick = () => {
		let conditionMsg = "13.03.2013";
		let textMsg = text === conditionMsg ? "Gunge them aw" : conditionMsg;

		setText(textMsg);
	};

	return (
		<React.Fragment>
			<h1>{text}</h1>

			<button type="button" className="btn" onClick={handleClick}>
				Change!
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
