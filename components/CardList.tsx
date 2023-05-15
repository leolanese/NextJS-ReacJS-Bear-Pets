import React, {memo} from 'react';
import Card from './Card';

function CardList({users}) {

    const cardComponent = users.map((user, i) => {
      console.log(user);
      return (
        <div className={`m-4 b-1`} key={i}>

            <Card key={i} 
                id={ users[i].id } 
                name={users[i].name} 
                href={`bear-pets/`}
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