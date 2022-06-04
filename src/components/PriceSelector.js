import React from 'react'
import Flags from './Flags'
import { useCurrency } from '../hooks/useCurrency'

export default function PriceSelector() {
    const { US, EU } = Flags
    const { changeCurrency } = useCurrency()
    return (
        <div className='price-selector'>
            <img src={US} onClick={() => changeCurrency('US')}/>
            <img src={EU} onClick={() => changeCurrency('EU')}/>
        </div>
    )
}
