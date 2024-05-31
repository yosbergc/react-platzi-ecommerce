import { useContext } from "react"
import { notificationContext } from "../../context/NotificationContext"
import './notification.css'
function Notification () {
    const { visible, message } = useContext(notificationContext)
    if (visible) {
        return <section className="notification">
        <p>{message}</p>
    </section>
    }
}
export default Notification