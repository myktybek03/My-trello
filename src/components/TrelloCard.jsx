import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

export const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {(provided) => (
        <CardContainer
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div>
            <div>
              <div>{text}</div>
            </div>
          </div>
        </CardContainer>
      )}
    </Draggable>
  );
};
