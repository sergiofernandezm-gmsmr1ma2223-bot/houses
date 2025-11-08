import './house-card.css'

import DefaultButton from '../buttons/default-button/default-button'
import DeleteButton from '../buttons/delete-button/delete-button'
import LikeButton from '../buttons/like-button/like-button'

const HouseCard = ({ title, imgSrc, price, city, rooms, liked, toggleLike, deleteAction }) => {
    return (
        <div className='house-card'>
            <LikeButton
                className='like-button'
                liked={liked}
                onToggle={toggleLike}
            />
            <img src={imgSrc}/>
            <div>
                <h1 className='heading'>{title}</h1>
                <p>Precio: {price}</p>
                <p>Ciudad: {city}</p>
                <p>Habitaciones: {rooms}</p>
                <div className='buttons-container'>
                    <DefaultButton
                        type={"primary"}
                        text={'Ver detalles'}
                    />
                    <DeleteButton
                        onClick={deleteAction}
                    />
                </div>
            </div>
        </div>
    )
}

export default HouseCard
