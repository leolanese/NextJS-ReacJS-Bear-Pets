import React, {memo} from 'react';
import Card from './../components/Card';

function CardList({users}) {

    const cardComponent = users.map( (user, i) => {
      return (
        <Card key={i} 
            id={ users[i].id } 
            name={users[i].name} 
            email={users[i].email}
            href="mate-shop/1"
            imgUrl="./next.svg"
        />
        
      )
    })

    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default memo(CardList);