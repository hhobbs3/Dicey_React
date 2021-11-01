import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const Contact = () => {
	const [timedMessage, setTimedMessage] = useState("Redirect in");
	
	const [count, setCount] = useState(9);
	let history = useHistory();
	
	useEffect(() => {
		setTimeout(() => {
			
			if (count > 0) {
				setCount((count) => count - 1)
			} else {
				setCount((count) => "");
				//setTimedMessage("You have Respawned");
				 history.push('/')
			}
		}, 1000);
	});
	
	return (
		<>
		<h1>Contact Me </h1>
		<p>Appologies, I am no longer supporting this app. You will soon be redirected to Home.</p>
		<h2>{timedMessage} {count} </h2>
		</>
	);
};

export default Contact;