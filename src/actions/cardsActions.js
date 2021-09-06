import { CONSTANTS } from ".";
import { v4 as uuidv4 } from "uuid";

export const addCard = (listID, text) => {
	const id = uuidv4();
	return {
		type: CONSTANTS.ADD_CARD,
		payload: { text, listID, id },
	};
};

export const editCard = (id, listID, newText) => {
	return {
		type: CONSTANTS.EDIT_CARD,
		payload: { id, listID, newText },
	};
};

export const deleteCard = (id, listID) => {
	return {
		type: CONSTANTS.DELETE_CARD,
		payload: { id, listID },
	};
};
