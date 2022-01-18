import React,{ createContext , useState } from 'react'
import data from "./data"
import chartData from "./chartData"

const Context = createContext()
const ContextProvider = ({children}) => {
    const [date] = useState(chartData)
    const [people] = useState(data)
    let name  = ""
    return (
        <Context.Provider value={{name , people , date}}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider , Context }
