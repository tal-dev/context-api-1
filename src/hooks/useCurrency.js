import { createContext, useContext, useState } from "react";

const CurrencyContext = createContext()

export const CurrencyProvider = ({children}) => {
    const [ currency, setCurrency ] = useState('US')

    const changeCurrency = (currency) => {
        setCurrency(currency)
    }

    return (
        <CurrencyContext.Provider value={{currency, changeCurrency}}>
            {children}
        </CurrencyContext.Provider>
    )
}

export const useCurrency = () => useContext(CurrencyContext)