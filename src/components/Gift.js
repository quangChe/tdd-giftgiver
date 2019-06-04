import React from 'react';

class Gift extends React.Component {
  state = {
    person: '',
    present: ''
  }

  changePerson = (e) => {
    const person = e.target.value;
    this.setState({ person });
  }

  changePresent = (e) => {
    const present = e.target.value;
    this.setState({ present });
  }

  render() {
    return (
      <div>
        <label>Person: </label>
        <input
          type='text'
          onChange={this.changePerson}
          className='input-person' />
        <br/>
        <label>Present: </label>
        <input 
          type='text'
          onChange={this.changePresent}
          className='input-present' />
      </div>
    )
  }
}

export default Gift;