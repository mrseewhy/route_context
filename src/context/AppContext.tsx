import { createContext, useContext, useState } from "react";


export const AppContext = createContext(null)


export const AppProvider = ({ children }) => {
    //vaue
    const [dark, setDark] = useState<boolean>(false)
    //return

    return (
        <AppContext.Provider value={{ dark, setDark }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext)

    if (!context) {
        return new Error('No item in app Context')
    }
    else {
        return context
    }
}