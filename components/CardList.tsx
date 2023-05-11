import React, {memo} from 'react';
import Card from './Card';

function CardList({users}) {

    const cardComponent = users.map((user, i) => {
      console.log(user);
      return (
        <div className={`m-4 bg-blue-500 border border-black`} key={i}>
            <Card key={i} 
                id={ users[i].id } 
                name={users[i].name} 
                email={users[i].email}
                href="mate-shop/1"
                imgUrl={users[i].img+users[i].id}
            />
        </div>
        
      )
    })

    return (
        <div className="flex flex-wrap">
            {cardComponent}
        </div>
    );
}

export default memo(CardList);