import React from 'react';
import './App.scss';
import { Button } from 'react-bootstrap';
import Gift from './components/Gift';
import { max_number } from './helper/index';

class App extends React.Component {
  state = {
    gifts: [],
  }

  addGift = (e) => {
    const { gifts }= this.state;
    const ids = gifts.map(gift => gift.id);
    const id = max_number(ids) + 1;
    return this.setState({gifts: gifts.concat({ id })});
  }

  removeGift = (id) => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);
    this.setState({ gifts })
  }

  render() { 
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className='gift-list'>
          {
            this.state.gifts.map(gift => (
              <Gift 
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift} />
            ))
          }
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}

export default App;
