import ReactDOM from 'react-dom/client'
import App from './routes/App'
import './index.css'
import { ProvideShoppingCart } from './context/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
<ProvideShoppingCart>
    <App />
</ProvideShoppingCart>
)
