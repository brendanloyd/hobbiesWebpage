import React from 'react'
import AccordionContainer from './AccordionContainer';
import Mtb from '../pictures/mtb.jpg'
import PayMeBtc from '../pictures/payMeBtc.jpg'
import Jager from '../pictures/jager.jpg'
import Dota from '../pictures/dota.jpg'

const myHobbies = [
    {
        title: 'Mountain Biking',
        picture: Mtb,
        text: 'Why do horses poop on the trail?'
    },
    {
        title: 'CryptoCurrency',
        picture: PayMeBtc,
        text: 'Pay me in BTC.'
    },
    {
        title: 'DOTA',
        picture: Dota,
        text: 'Highest rank: Archon 1.'
    },
    {
        title: 'Jäger',
        picture: Jager,
        text: 'My (almost)two year old Rottweiler\n How\'d he get so gud!?'
    }
]

const Hobbies = () => {
    return (
        <div className='paper accordions'>
            {
                myHobbies.map(({title, picture, text}, index) => {
                    return (
                        <AccordionContainer
                            title={title}
                            picture={picture}
                            text={text}
                            defaultExpanded={index === 0}
                        />
                    )
                })
            }
        </div>
    )
}

export default Hobbies