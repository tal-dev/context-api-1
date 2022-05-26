import React from 'react'
import Flags from './Flags'

export default function PriceSelector({changeCurrency}) {
    const { US, EU } = Flags
    return (
        <div className='price-selector'>
            <img src={US} onClick={changeCurrency}/>
            <img src={EU} onClick={changeCurrency}/>
        </div>
    )
}
