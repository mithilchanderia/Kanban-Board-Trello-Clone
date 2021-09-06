import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCard } from "../actions";
import TrelloForm from "./TrelloForm";
import TrelloButton from "./TrelloButton";
import TrelloOpenForm from "./TrelloOpenForm";

const TrelloCreate = props => {
	const dispatch = useDispatch();

	const [formOpen, setFormOpen] = useState(false);
	const [text, setText] = useState("");

	const openForm = () => {
		setFormOpen(true);
	};

	const closeForm = e => {
		setFormOpen(false);
	};

	const handleInputChange = e => {
		setText(e.target.value);
	};

	const handleAddCard = () => {
		const { listID } = props;

		if (text) {
			setText("");
			dispatch(addCard(listID, text));
		}
	};

	const { list } = props;
	return formOpen ? (
		<TrelloForm text={text} onChange={handleInputChange} closeForm={closeForm}>
			<TrelloButton onClick={list ? this.handleAddList : handleAddCard}>
				{list ? "Add List" : "Add Card"}
			</TrelloButton>
		</TrelloForm>
	) : (
		<TrelloOpenForm list={list} onClick={openForm}>
			{list ? "Add another list" : "Add another card"}
		</TrelloOpenForm>
	);
};

export default TrelloCreate;
