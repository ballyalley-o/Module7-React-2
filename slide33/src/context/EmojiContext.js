import React, {createContext} from 'react'


const hi = "👋";
const love = "🫶"; //we can put these in context too and then only have to define them once

export const EmojiContext = createContext(hi)

export const EmojiProvider = ({ children }) => {
    const [mood, setMood] = React.useState(hi)
    
return (
        <EmojiContext.Provider value={{ mood, setMood, hi, love }}>
            {children}
        </EmojiContext.Provider>
    )
}

