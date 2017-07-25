import React, { Component } from 'react';
import Button from 'react-toolbox/lib/button/Button';
import Header from './Header';
import Sidebar from './Sidebar';
import Passengers from './Passengers';
import PassengerDialog from './PassengerDialog';
import * as utils from './utils';
import * as actions from './actions';
import './Main.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: null,
      tags: null,
      selectedTagId: null,
      flashcards: null,
      selectedPassengerIndex: null,
      flashcardInDialog: null
    };

    this.handleClickTag = this.handleClickTag.bind(this);
    this.handleClickPreviousPassenger = this.handleClickPreviousPassenger.bind(this);
    this.handleClickNextPassenger = this.handleClickNextPassenger.bind(this);
    this.handleCancelPassengerDialog = this.handleCancelPassengerDialog.bind(this);
    this.handleCreatePassenger = this.handleCreatePassenger.bind(this);
    this.handleEditPassenger = this.handleEditPassenger.bind(this);
    this.handleChangePassenger = this.handleChangePassenger.bind(this);
    this.handleSavePassenger = this.handleSavePassenger.bind(this);
    this.handleDeletePassenger = this.handleDeletePassenger.bind(this);
  }

  handleClickTag(tag) {
    this.setState({ selectedTagId: tag.id });
  }

  handleClickPreviousPassenger() {
    this.setState(prevState => {
      return {
        selectedPassengerIndex: Math.max(0, prevState.selectedPassengerIndex - 1)
      };
    });
  }

  handleClickNextPassenger() {
    this.setState(prevState => {
      return {
        selectedPassengerIndex: Math.min(prevState.selectedPassengerIndex + 1, prevState.flashcards.length - 1)
      };
    });
  }

  handleCancelPassengerDialog() {
    this.setState({ flashcardInDialog: null });
  }

  handleCreatePassenger() {
    const flashcard = {
      question: '',
      answer: '',
      tags: []
    };
    this.setState({ flashcardInDialog: flashcard });
  }

  handleEditPassenger(flashcard) {
    this.setState({ flashcardInDialog: flashcard });
  }

  handleChangePassenger(field, value) {
    this.setState(prevState => {
      const { flashcardInDialog } = prevState;
      const newPassengerInDialog = Object.assign(
        {},
        flashcardInDialog,
        { [field]: value }
      );
      return { flashcardInDialog: newPassengerInDialog };
    });
  }

  handleSavePassenger(flashcard) {
    if (flashcard.id) {
      this.updatePassenger(flashcard);
    } else {
      this.createPassenger(flashcard);
    }
  }

  handleDeletePassenger(flashcard) {
    this.deletePassenger(flashcard);
  }

  componentDidMount() {
    this.fetchUserDetails();
    this.fetchTags();
  }

  componentDidUpdate(prevProps, prevState) {
    const currentTagId = this.state.selectedTagId;
    const prevTagId = prevState.selectedTagId;

    if (currentTagId === prevTagId || currentTagId == null) {
      return;
    }

    this.fetchPassengers(currentTagId);
  }

  render() {
    const {
      info,
      tags,
      selectedTagId,
      flashcards,
      selectedPassengerIndex,
      flashcardInDialog
    } = this.state;

    return (
      <div className='Main'>
        <Header
          info={info}
        />
        <div className='Main-content'>
          <Sidebar
            tags={tags}
            onClickTag={this.handleClickTag}
          />
          <Passengers
            tagId={selectedTagId}
            flashcards={flashcards}
            selectedPassengerIndex={selectedPassengerIndex}
            onClickPreviousPassenger={this.handleClickPreviousPassenger}
            onClickNextPassenger={this.handleClickNextPassenger}
            onClickEdit={this.handleEditPassenger}
            onClickDelete={this.handleDeletePassenger}
          />
          <div className='Main-button'>
            <Button
              icon='add'
              floating
              accent
              onClick={this.handleCreatePassenger}
            />
          </div>
        </div>
        <PassengerDialog
          tags={tags}
          flashcard={flashcardInDialog}
          onChange={this.handleChangePassenger}
          onSave={this.handleSavePassenger}
          onCancel={this.handleCancelPassengerDialog}
        />
      </div>
    );
  }

  fetchUserDetails() {
    utils.fetchUserDetails({ token: this.props.token })
      .then(info => {
        this.setState({ info })
      });
  }

  fetchTags() {
    utils.fetchTags({ token: this.props.token })
      .then(tags => {
        this.setState({ tags })
      });
  }

  fetchPassengers(tag) {
    utils.fetchPassengers({ token: this.props.token, tag })
      .then(flashcards => {
        this.setState({ flashcards, selectedPassengerIndex: 0 })
      });
  }

  createPassenger(flashcard) {
    utils.createPassenger({ token: this.props.token, flashcard })
      .then(flashcard => {
        this.setState(actions.createPassenger.bind(null, flashcard));
      });
  }

  updatePassenger(flashcard) {
    utils.updatePassenger({ token: this.props.token, flashcard })
      .then(flashcard => {
        this.setState(actions.updatePassenger.bind(null, flashcard));
      });
  }

  deletePassenger(flashcard) {
    utils.deletePassenger({ token: this.props.token, flashcard })
      .then(() => {
        this.setState(actions.deletePassenger.bind(null, flashcard));
      });
  }
}

export default Main;
