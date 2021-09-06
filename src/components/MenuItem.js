import React from "react";
import CloseIcon from "@material-ui/icons/Close";

const MenuItem = props => {
	return (
		<div className="header-button-showmenu">
			<div className="header-button-menu-tab">
				<div className="header-menu-main">
					<h1 className="header-menu-title">MenuItem</h1>
					<CloseIcon onClick={props.toggleOff} className="header-menu-close" />
				</div>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
				<p>Hello</p>
			</div>
		</div>
	);
};

export default MenuItem;
