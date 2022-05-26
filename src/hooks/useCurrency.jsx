import React, {useState, useContext, createContext} from 'react'

const CurrencyContext = createContext(null)

export const CurrencyProvider = ({value, children}) => {
    
    const [currency, setCurrency] = useState(localStorage.getItem('currency') || value)

    const updateCurrency = (currency) => {
        setCurrency(currency)
        localStorage.setItem("currency", currency)
    }
    return (
        <CurrencyContext.Provider value={{currency, updateCurrency}}>
            {children}
        </CurrencyContext.Provider>
    )
}

const useCurrency = () => useContext(CurrencyContext)

export default useCurrency;
