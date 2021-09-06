import React from "react";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="justify-content-start">
				<a href="/" className="nav-link">
					HOME
				</a>
				<a href="/" className="nav-link">
					TOUR
				</a>

				<a href="/" className="nav-link">
					BLOG
				</a>
			</div>
			<div className="justify-content-center">
				<a href="/" className="logo">
					Trello
				</a>
			</div>
			<div className="justify-content-end">
				<a href="/" className="login">
					Login
				</a>
				<a href="/" className="sign-up">
					Sign Up
				</a>
			</div>
		</div>
	);
};

export default Navbar;
