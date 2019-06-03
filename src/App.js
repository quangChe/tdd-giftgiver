import React from 'react';
import './App.scss';
import { Button } from 'react-bootstrap';

class App extends React.Component {
  state = {
    gifts: [],
  }

  addGift = (e) => {
    const { gifts }= this.state;
    const ids = gifts.map(gift => gift.id);
    const newId = ids.length ? Math.max(...ids) : 0;
    return this.setState({gifts: gifts.concat({id: newId + 1})});
  }

  render() { 
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => (
              <div/>
            ))
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;
