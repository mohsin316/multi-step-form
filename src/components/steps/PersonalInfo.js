import './PersonalInfo.css'

// framer motion
import { motion as m } from 'framer-motion'

export default function PersonalInfo({Field, errors, touched}) {
  const container ={
    hidden: {
        opacity:0,
    },
    show: {
        opacity:1,
        transition:{
          delay:.25,
        },
    },
}

  return (
    <m.div 
      className='personalInfo-form'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div className="input-container">
        <label className={`${touched.name && errors.name ? 'error-message' : ''}`} htmlFor="name">
          {touched.name && errors.name ? errors.name : 'Name'}
        </label>
        <Field 
          type="text" 
          name='name' 
          placeholder='e.g. Stephen King'
          className={`${touched.name && errors.name ? 'error-message-outline' : ''}`}
        />
        
      </div>
      
      <div className="input-container">
        <label className={`${touched.email && errors.email ? 'error-message' : ''}`} htmlFor="email">{touched.email && errors.email ? errors.email : 'Email Address'}</label>
        <Field 
          type="text" 
          name='email' 
          placeholder='e.g. stephenking@lorem.com'
          className={`${touched.email && errors.email ? 'error-message-outline' : ''}`}
        />
      </div>
      
      <div className="input-container">
        <label className={`${touched.phone && errors.phone ? 'error-message' : ''}`}  htmlFor="phone">{touched.phone && errors.phone ? errors.phone : 'Phone Number'}</label>
        <Field 
          type="text" 
          name='phone'
          placeholder='e.g. +1 45621 47892'
          className={`${touched.phone && errors.phone ? 'error-message-outline' : ''}`}
        />
      </div>

    </m.div>
  )
}
