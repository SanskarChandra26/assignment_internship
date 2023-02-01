import React, { useRef, useState } from "react";

function WordCounter() {
	const [count, setCount] = useState(0);
	const inputEl = useRef(null);

	const onButtonClick = () => {
		setCount(inputEl.current.value.split(" ").length);
	};

	return (
		<>
			<input type="text" />
			<button onClick={onButtonClick}>Count words</button>
			<p>Word count: {count}</p>
		</>
	);
}

export default WordCounter;
