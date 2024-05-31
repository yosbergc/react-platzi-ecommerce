import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import SingleOrder from '../SingleOrder'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../../components/Header'
import { ProvideOrder } from '../../context/OrderContext'
import { ProvideNotification } from '../../context/NotificationContext'
function App() {
  return (
  <Router>
    <ProvideNotification>
      <ProvideOrder>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:category' element={<Home/>}/>
            <Route path='/account' element={<MyAccount/>}/>
            <Route path='/my-orders' element={<MyOrders/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/order/:id' element={<SingleOrder/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
      </ProvideOrder>
    </ProvideNotification>
  </Router>
  )
}

export default App
