import React from 'react';

import  CardItem from './CardItem'

const CardList = props => {

    return (
        <ul>
            {
                props.tasks.map(task => (
                    <CardItem key={task.id}
                              id={task.id}
                              image={task.image}
                              Title={task.title}
                              description={task.description} />
                ))
            }
        </ul >
    )
}

export default CardList;