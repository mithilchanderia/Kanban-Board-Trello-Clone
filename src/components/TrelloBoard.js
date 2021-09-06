import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import TrelloList from "./TrelloList";
import styled from "styled-components";
import BoardTitle from "./BoardTitle";

const ListsContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
	margin-left: 10px;
`;

export const TrelloBoard = () => {
	const dispatch = useDispatch();

	const lists = useSelector(state => state.lists);
	const cards = useSelector(state => state.cards);
	const boards = useSelector(state => state.boards);
	const boardID = "board-0";

	const onDragEnd = result => {
		const { destination, source, draggableId, type } = result;

		if (!destination) {
			return;
		}

		dispatch(
			sort(
				source.droppableId,
				destination.droppableId,
				source.index,
				destination.index,
				draggableId,
				type
			)
		);
	};

	const board = boards[boardID];
	if (!board) {
		return <p>Board Not Found</p>;
	}
	const listOrder = board.lists;

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<BoardTitle title={board.title} />
			<Droppable droppableId="all-lists" direction="horizontal" type="list">
				{provided => (
					<ListsContainer {...provided.droppableProps} ref={provided.innerRef}>
						{listOrder.map((listID, index) => {
							const list = lists[listID];
							if (list) {
								const listCards = list.cards.map(cardID => cards[cardID]);

								return (
									<TrelloList
										listID={list.id}
										key={list.id}
										title={list.title}
										cards={listCards}
										index={index}
									/>
								);
							} else {
								return null;
							}
						})}
						{provided.placeholder}
					</ListsContainer>
				)}
			</Droppable>
		</DragDropContext>
	);
};
