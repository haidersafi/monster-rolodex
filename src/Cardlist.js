import React from 'react';
import './card-list.css';
import { Card } from './Card';

export const Cardlist=({ Monsters })=>{
    
    return(<div className='card-list'>{Monsters.map(monster=><Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>)}</div>)
}