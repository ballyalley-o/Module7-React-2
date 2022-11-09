import React, {createContext} from 'react'


const hi = "👋";
const love = "🫶";

export const EmojiContext = createContext(hi)

export const EmojiProvider = ({ children }) => {
    const { mood, setMood } = React.useState(hi)
return (
        <EmojiContext.Provider value={{ mood, setMood }}>
            {children}
        </EmojiContext.Provider>
    )
}

