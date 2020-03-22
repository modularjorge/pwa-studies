import React from 'react';
import Card from './Card.js';
import Scroller from './Scroller.js';

const CardsList = ({users, search}) => {
    const filteredUsers = users.filter(user => (user.name.toLowerCase().includes(search.toLowerCase())));
  return (
      <Scroller>
    <div className="cards-list">
        {
            filteredUsers.map((user) => <Card key={user.id} name={user.name} />)
        }
    </div>
    </Scroller>
  );
}

export default CardsList;
