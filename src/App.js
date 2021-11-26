import {useState,useEffect} from 'react'
import Pokimon from './Pokimon'
function App() {
  
  const [allPokemons,setAllPokemons]=useState([])
  const [loadMore,setLoadMore]=useState('https://pokeapi.co/api/v2/pokemon')


  const getAllPokemons = async () => {
  
    const res = await fetch(loadMore)
    const data = await res.json()
    setLoadMore(data.next)
  
    const createPokemonObject = (data) =>{
      data.results.forEach(async pokemon => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList,data])
      });
    }
    
    createPokemonObject(data)
    await console.log(allPokemons)
  }
  function ButtonLoad(){
    getAllPokemons()
  }
  useEffect(() => {
    getAllPokemons()
  }, [])
  //<li>{p.name} {p.sprites.other.dream_world.front_default}</li>
  return (
    <>
    <h1>Pokidex</h1>
    {console.log("Data Dump")}
    {console.log(allPokemons[0])}
    { allPokemons.map(p => <Pokimon name={p.name} image={p.sprites.other.dream_world.front_default} type={p.types[0].type.name} />
    )}
    <button onClick={ButtonLoad}>Load More</button>
    </>
  );
}

export default App;
