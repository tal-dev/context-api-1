import React from 'react'
import Flags from './Flags'
import useCurrency from '../hooks/useCurrency'

export default function PriceSelector() {
    const { US, EU } = Flags
    const { updateCurrency } = useCurrency()

    return (
        <div className='price-selector'>
            <img src={US} onClick={() => updateCurrency('US')}/>
            <img src={EU} onClick={() => updateCurrency('EU')}/>
        </div>
    )
}
