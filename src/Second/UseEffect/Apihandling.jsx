import React, { useEffect, useState } from 'react';

const Apihandling = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

//   const fetchPokemon = () => {
//     fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//       .then((res) => res.json())
//       .then((data) => {
//         setApiData(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setLoading(false);
//       });
//   };

    const fetchPokemon = ()=>{ 
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu").then( (res)=>{ 

            return res.json()
        }).then( ( data)=>{  setApiData(data)
            setLoading(false)
         }).catch( ( error )=>{ console.log(error ) 
            setLoading(false)})
    }

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h3>Working!</h3>
      <h4>{apiData.name}</h4>
      <img 
        src={apiData.sprites.front_default} 
        alt={apiData.name} 
        width="200" 
      />
    </div>
  );
};

export default Apihandling;
