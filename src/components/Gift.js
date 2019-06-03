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

  render() {
    return (
      <div>
        <input
          type='text'
          onChange={this.changePerson}
          className='input-person' />
      </div>
    )
  }
}

export default Gift;