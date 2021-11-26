import React from 'react'

const Pokimon = ({name,image,type}) => {
    return (
        <div class="parent">
            <div key={name} class="Pokemons">
            {console.log("Pokemon name :"+name+" Image url:"+image)}
            <div><img src={image}  alt={name} /></div>
            <small class="name">{name}</small>
            <small class="type">{type} type</small>
            </div>
        </div>
    )
}

export default Pokimon

