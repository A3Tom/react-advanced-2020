import React, { useState } from "react";

const ErrorExample = () => {
	let title = "random title";

	const clickHandler = () => {
		console.log(title);
	};

	return (
		<React.Fragment>
			<h2>{title}</h2>
			<button type="button" className="btn" onClick={clickHandler}>
				Change title
			</button>
		</React.Fragment>
	);
};

export default ErrorExample;
