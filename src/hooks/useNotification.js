import React from "react"
function useNotification() {
    const [visible, setVisible] = React.useState(false)
    const [message, setMessage] = React.useState('')
    function showNotification() {
        setVisible(true)
        setTimeout(() => {
            setVisible(false)
        }, 5000)
    }

    function newNotification(newMessage) {
        setMessage(newMessage)
        showNotification()
    }
    return {visible, message, newNotification}
}
export default useNotification