import React from 'react';
import Person from './Person';

function List() {
    const names = ['ushbds','ssushysd','dsfs']
    const List = [{
        id: 1,
        name: 'rahul'
    },
    {
        id: 2,
        name: 'hgasiyiw'
    }]
    const Namelist = names.map((name, index) => <h2 key={name}>{index} {name}</h2>)
    return (
        <div>
            {Namelist}
        </div>
    )
}

export default List
