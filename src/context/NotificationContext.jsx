import { createContext } from "react";
import useNotification from '../hooks/useNotification'
const notificationContext = createContext()

function ProvideNotification({children}) {
    const { visible, message, newNotification } = useNotification()

    return <notificationContext.Provider value={{
        visible,
        message,
        newNotification
    }}>
        {children}
    </notificationContext.Provider>
}
export {notificationContext, ProvideNotification}