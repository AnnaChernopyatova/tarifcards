import React from 'react';
import styles from './styles/tarif.css'
//import * as classnames from 'classnames';

function Tarif (props) {
    return (
    props.tarif.map((tarif => {
        return (
            <div className={'tarifCard ' + (tarif.price === 550 ?
            'tarifCard__big' : '' ) }>
                <div className={'tarifCard_header ' + (tarif.price === 300 &&
            'tarifCard_header__blue' || tarif.price === 450 &&
            'tarifCard_header__green' || tarif.price === 550 &&
            'tarifCard_header__red' || tarif.price === 1000 &&
            'tarifCard_header__black') }>
                    {tarif.name}
                </div>
                <div className={'tarifCard_price ' + (tarif.price === 300 &&
            'tarifCard_price__blue' || tarif.price === 450 &&
            'tarifCard_price__green' || tarif.price === 550 &&
            'tarifCard_price__red' || tarif.price === 1000 &&
            'tarifCard_price__black') }>
                    <sup>руб</sup>{tarif.price}<sub>/мес</sub>
                </div>
                <div className='tarifCard_speed'>
                    до {tarif.speed} Мбит/сек
                </div>
                <div className='tarifCard_footer'>
                    Объем включенного траффика не играничен
                </div>
            </div>
        )
    })) 
    )
}

export default Tarif; 