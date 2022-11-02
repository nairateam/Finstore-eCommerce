import React from 'react'
import '../styles/Complete.css'
import clock from '../assets/icons/clock.svg'
import clist from '../assets/icons/checklist.svg'
import Iccon from '../assets/icons/Frame 5.svg'
import PageHead from '../components/Layout/PageHead'

function Complete() {
  return (
    <div>
        <PageHead title='Order Confirmed' page='Confirmed' />
        <div className="container complete">
            <div className="clock">
                <img src={clock} className="clock" alt="" />
            </div>
            <div className="clist">
                <img src={clist} className="clock" alt="" />
            </div>
            <img src={Iccon} className="checkk" alt="" />
            <h2>Your Order Is Completed! </h2>
            <p>Thank you for your order! Your order is being processed and will be completed within 3-6
                hours. You will receive an email confirmation when your order is completed.
            </p>
            <button>Continue Shopping</button>
        </div>
    </div>
  )
}

export default Complete