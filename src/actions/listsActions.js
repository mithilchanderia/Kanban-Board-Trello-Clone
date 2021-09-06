import { CONSTANTS } from ".";

export const sort = (
	droppableIdStart,
	droppableIdEnd,
	droppableIndexStart,
	droppableIndexEnd,
	draggableId,
	type
) => {
	return dispatch => {
		const boardID = "board-0";
		dispatch({
			type: CONSTANTS.DRAG_HAPPENED,
			payload: {
				droppableIdStart,
				droppableIdEnd,
				droppableIndexEnd,
				droppableIndexStart,
				draggableId,
				type,
				boardID,
			},
		});
	};
};

export const editTitle = (listID, newTitle) => {
	return {
		type: CONSTANTS.EDIT_LIST_TITLE,
		payload: {
			listID,
			newTitle,
		},
	};
};
