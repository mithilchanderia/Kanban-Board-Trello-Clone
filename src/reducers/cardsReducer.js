import { CONSTANTS } from "../actions";

const initialState = {
	"card-0": {
		text: "Helpdesk Call A999",
		id: `card-0`,
		list: "list-0",
	},
	"card-1": {
		text: "Helpdesk Call B999",
		id: `card-1`,
		list: "list-1",
	},
	"card-2": {
		text: "Helpdesk Call C999",
		id: `card-2`,
		list: "list-2",
	},
	"card-3": {
		text: "Helpdesk Call D999",
		id: `card-3`,
		list: "list-3",
	},
};

const cardsReducer = (state = initialState, action) => {
	switch (action.type) {
		case CONSTANTS.ADD_CARD: {
			const { text, listID, id } = action.payload;

			const newCard = {
				text,
				id: `card-${id}`,
				list: listID,
			};

			return { ...state, [`card-${id}`]: newCard };
		}
		case CONSTANTS.EDIT_CARD: {
			const { id, newText } = action.payload;
			const card = state[id];
			card.text = newText;
			return { ...state, [`card-${id}`]: card };
		}

		case CONSTANTS.DELETE_CARD: {
			const { id } = action.payload;
			const newState = state;
			delete newState[id];
			return newState;
		}

		// case CONSTANTS.FILTER_CARDS: {
		// 	const { text } = action.payload;
		// 	const newState = {};
		// 	for (let key in state) {
		// 		if (state[key].text.includes(text)) {
		// 			console.log(key, state[key]);
		// 			// newState.key(state[key]);
		// 		}
		// 	}
		// 	// console.log(newState);
		// 	return newState;
		// }
		default:
			return state;
	}
};

export default cardsReducer;
