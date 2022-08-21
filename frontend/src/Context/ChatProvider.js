import { createContext } from 'react'

const ChatContext = createContext()

const chatProvider = ({children}) => {
    return (
        <ChatContext.Provider>{children}</ChatContext.Provider>
    )
};

export default chatProvider;