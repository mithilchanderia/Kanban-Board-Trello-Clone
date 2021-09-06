import React, { useState } from "react";
import TrelloCard from "./TrelloCard";
import TrelloCreate from "./TrelloCreate";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { editTitle } from "../actions";
import { useDispatch } from "react-redux";

const ListContainer = styled.div`
	background-color: #dfe3e6;
	border-radius: 3px;
	width: 300px;
	padding: 8px;
	height: 100%;
	margin: 0 8px 8px 0;
`;

const StyledInput = styled.input`
	width: 100%;
	border: none;
	outline-color: blue;
	border-radius: 3px;
	margin-bottom: 3px;
	padding: 5px;
`;

const TitleContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

const ListTitle = styled.h4`
	transition: background 0.3s ease-in;
	${TitleContainer}:hover & {
		background: #ccc;
	}
`;

const TrelloList = ({ title, cards, listID, index }) => {
	const [isEditing, setIsEditing] = useState(false);
	const [listTitle, setListTitle] = useState(title);
	const dispatch = useDispatch();

	const renderEditInput = () => {
		return (
			<form onSubmit={handleFinishEditing}>
				<StyledInput
					type="text"
					value={listTitle}
					onChange={handleChange}
					autoFocus
					onFocus={handleFocus}
					onBlur={handleFinishEditing}
				/>
			</form>
		);
	};

	const handleFocus = e => {
		e.target.select();
	};

	const handleChange = e => {
		e.preventDefault();
		setListTitle(e.target.value);
	};

	const handleFinishEditing = e => {
		setIsEditing(false);
		dispatch(editTitle(listID, listTitle));
	};

	return (
		<Draggable draggableId={String(listID)} index={index}>
			{provided => (
				<ListContainer
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
				>
					<Droppable droppableId={String(listID)} type="card">
						{provided => (
							<div>
								<div>
									{isEditing ? (
										renderEditInput()
									) : (
										<TitleContainer onClick={() => setIsEditing(true)}>
											<ListTitle>{listTitle}</ListTitle>
										</TitleContainer>
									)}
								</div>
								<div {...provided.droppableProps} ref={provided.innerRef}>
									{cards.map((card, index) => (
										<TrelloCard
											key={card.id}
											text={card.text}
											id={card.id}
											index={index}
											listID={listID}
										/>
									))}
									{provided.placeholder}
									<TrelloCreate listID={listID} />
								</div>
							</div>
						)}
					</Droppable>
				</ListContainer>
			)}
		</Draggable>
	);
};

export default TrelloList;
