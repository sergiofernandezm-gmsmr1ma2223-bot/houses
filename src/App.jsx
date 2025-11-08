import { useState } from 'react'
import './App.css'

import HousesData from './data/housesData'
import HouseCard from './components/house-card/house-card'

const App = () => {

  const[houses,setHouses] = useState(HousesData)

  const toggleLike = (id) => {
    const updatedLikedHouses = houses.map((house) =>{
      if(house.id === id){
        return {...house, liked: !house.liked}
      } 
      return house
    })
    setHouses(updatedLikedHouses)
  }
    const deleteHouse = (id) => {
    const newHouses = houses.filter((house) => {
      return house.id !== id
    })
    setHouses(newHouses);
  }

  return (
    <div className='cards-container'>
      {
        houses.map((house) => {
          return (
            <HouseCard
              liked={house.liked}
              title={house.title}
              imgSrc={house.imgSrc}
              price={house.price}
              city={house.city}
              rooms={house.rooms}
              toggleLike={() => {toggleLike(house.id)}}
              deleteAction={() => {deleteHouse(house.id)}}
            /> 
          )
        })
      }
    </div>
  )
}

export default App
