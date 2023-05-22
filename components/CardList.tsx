import React, {memo} from 'react';
import Card from './Card';

function CardList({pets}) {
    const cardComponent = pets.map((user, i) => {
      return (
        <div className={`m-4 b-1`} key={i}>

            <Card key={i} 
                id={ pets[i].id } 
                name={pets[i].name} 
                href={`bear-pets`}
                imgUrl={pets[i].img+pets[i].id}
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