import React from 'react';
import Logo from '../Images/IT.jpg';

import CardList from './CardList';

const Card = () => {

   
    const LIST = [
        {id:1, title:"Small Chops and Snacks", image:Logo, description:"This is a building contractor div"},
        {id:2, title:"Cakes", image:Logo, description:"This is a building contractor div" },
        {id:3, title:"Fried Chickens and Meat", image:Logo, description:"This is a building contractor div" },
        {id:4, title:"Interior Plumbing/Electric Wiring", image:Logo, description:"This is a building contractor div" },
        {id:5, title:"Snacks", image:Logo, description:"This is a building contractor div" },
        {id:6, title:"Plumbing", image:Logo, description:"This is a building contractor div" },
       
    ]


return <CardList tasks={LIST} />;

};
export default Card;