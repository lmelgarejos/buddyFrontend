import React, { Component } from 'react';
import Card from 'react-toolbox/lib/card/Card';
import CardText from 'react-toolbox/lib/card/CardText';
import CardActions from 'react-toolbox/lib/card/CardActions';
import Button from 'react-toolbox/lib/button/Button';
import IconMenu from 'react-toolbox/lib/menu/IconMenu';
import MenuItem from 'react-toolbox/lib/menu/MenuItem';
import MenuDivider from 'react-toolbox/lib/menu/MenuDivider';
import Markdown from './Markdown';
import './Passenger.css';

class Passenger extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showInfo: false
    };

    this.handleClickShow = this.handleClickShow.bind(this);
    this.handleClickEdit = this.handleClickEdit.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  handleClickShow() {
    this.setState(prevState => {
      return { showInfo: !prevState.showInfo };
    });
  }

  handleClickEdit() {
    this.props.onClickEdit(this.props.passenger);
  }

  handleClickDelete() {
    if (confirm('Are you sure you want to delete it?')){
      this.props.onClickDelete(this.props.passenger);
    }
  }

  componentDidUpdate(prevProps) {
    const currentPassengerId = this.props.passenger.id;
    const prevPassengerId = prevProps.passenger.id;

    if (currentPassengerId !== prevPassengerId) {
      this.setState({ showInfo: false })
    }
  }

  render() {
    const { passenger } = this.props;
    const { showInfo } = this.state;

    return (
      <Card className='Passenger'>
        <IconMenu
          icon='more_vert'
          menuRipple
          className='Passenger-menu'
        >
          <MenuItem
            value='edit'
            icon='edit'
            caption='Edit'
            onClick={this.handleClickEdit}
          />
          <MenuDivider />
          <MenuItem
            value='signout'
            icon='delete'
            caption='Delete'
            onClick={this.handleClickDelete}
          />
        </IconMenu>
        <CardText>
          {!showInfo ?
            <div className='Passenger-question'>
              <Markdown source={passenger.question} />
            </div> :
            <div className='Passenger-answer'>
              <Markdown source={passenger.answer} />
            </div>
          }
        </CardText>
        <CardActions className='Passenger-actions'>
          <Button
            icon='replay'
            label='Flip'
            onClick={this.handleClickShow}
          />
        </CardActions>
      </Card>
    );
  }
}

export default Passenger;
