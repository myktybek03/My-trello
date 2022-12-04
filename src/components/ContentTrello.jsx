import { TrelloList } from './TrelloList';
import { connect } from 'react-redux';
import { Component } from 'react';
import TrelloActionButton from './TrelloButton';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from '../actions';
import styled from 'styled-components';

const ListsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 40rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-family: Arial;
`;

const Button = styled.button`
  border-style: none;
  border-radius: 3px;
  height: 36px;
  width: 150px;
  padding-left: 10;
  background-color: #5aac44;
  color: white;
  cursor: pointer;
  outline: none;
`;

class App extends Component {
  state = {
    bg: false,
    currentBg:
      'https://crmble.com/wp-content/uploads/2020/11/Crmble_Trello_CRM_BG.png',
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
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

  onClose = () => {
    this.setState({ bg: false });
  };

  onSetBg = (val) => {
    this.setState({ currentBg: val });
  };

  render() {
    const { lists } = this.props;
    return (
      <>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div
            style={{
              padding: '20px',
              backgroundImage: `url(${this.state.currentBg})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <Header>
              <Title>Trello</Title>
            </Header>
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="list"
            >
              {(provided) => (
                <ListsContainer
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {lists.map((list, index) => {
                    return (
                      <TrelloList
                        listID={list.id}
                        key={list.id}
                        title={list.title}
                        cards={list.cards}
                        index={index}
                      />
                    );
                  })}
                  <TrelloActionButton list />
                </ListsContainer>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
