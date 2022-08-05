import React from 'react'

export default function card(props) {
    return (
        <div className='card'>
            <img src={`../images/${props.item.cardimg}`} className='card--thum'></img>
            <div className='card--info'>
                <div className='card--title'>
                    <img src='../images/location.png' className='location--logo'></img>
                    <p>{props.item.cityname}</p>
                    <a href='#' className='google--map'>view on google map</a>
                </div>
                <h1>{props.item.placename}</h1>
                <h5>{props.item.date}</h5>
                <p>{props.item.discription}</p>
            </div>
        </div >
    )
}
