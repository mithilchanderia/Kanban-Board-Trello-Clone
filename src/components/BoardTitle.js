import React, { useState } from "react";
import MenuItem from "./MenuItem";

const BoardTitle = props => {
	const [toggle, setToggle] = useState(false);

	const toggleOff = () => {
		setToggle(false);
	};

	return (
		<>
			<div className="header">
				<h2 className="header-title">{props.title}</h2>
				<button className="header-button-public login">Public</button>
				{!toggle ? (
					<button
						onClick={() => setToggle(true)}
						className="header-button-showmenu login"
					>
						Show Menu
					</button>
				) : null}

				{toggle ? <MenuItem toggleOff={toggleOff} /> : null}
			</div>
		</>
	);
};

export default BoardTitle;
