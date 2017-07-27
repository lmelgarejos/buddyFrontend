'use strict';

import React from 'react';
import classnames from 'classnames';
import LoggedOut from '../App.js';

function AppView(props) {
  if (!props.loggedIn) return <LoggedOut />
  return (
    <div>
    <Header {...props} />
    <Main {...props} />
    <Footer {...props} />
    </div>
  );
}

function Header(props) {
  return (
    <header id="header">
    <h1>Fill the from to become a driver</h1>
    <NewDriver {...props} />
    </header>
  );
}

function Main(props) {
  // if (props.drivers.size === 0) {
    return null;
  // }
  // return props.drivers

}

function Footer(props) {
  // if (props.drivers.size === 0) {
    return null;
  // }
}



class NewDriver extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(Object.keys(this.props));
    alert('A new driver is being added!');
    console.log(this.state);
    this.props.onAdd(this.state)
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit} id='new-driver'>
      <label>
      Username:
      <input type="text" name="username" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      First name:
      <input type="text" name="first_name" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Last name:
      <input type="text" name="last_name" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Home address:
      <input type="text" name="home_address" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Home zip code:
      <input type="text" name="home_zip_code" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Work address:
      <input type="text" name="work_address" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Work zip code:
      <input type="text" name="work_zip_code" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      License number:
      <input type="text" name="license_number" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Email:
      <input type="text" name="email" onChange={this.handleInputChange} />
      </label>
      <br />

      <label>
      Phone number:
      <input type="text" name="phone_number" onChange={this.handleInputChange} />
      </label>
      <br />

      <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AppView;
// const TestName = () => {return(<div></div>)};
// export default TestName
