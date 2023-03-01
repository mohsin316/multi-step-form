import './ThankyouPage.css'

import Tick from '../../assets/icon-thank-you.svg'
import { useEffect } from 'react'

// framer motion
import { motion as m } from 'framer-motion'

export default function ThankyouPage({goto}) {
  const container ={
    hidden: {
        opacity:0,
    },
    show: {
        opacity:1,
    },
}

  useEffect(() => {
    console.log('Form submitted!')
    setTimeout(() => {
      goto(0)
    }, 5000);
  }, [goto])
  return (
    <m.div 
      className='thankyou-form'
      variants={container}
      initial='hidden'
      animate='show'
    >
        <img src={Tick} alt="tick mark" />
        <h1>Thank you!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com.</p>
    </m.div>
  )
}
