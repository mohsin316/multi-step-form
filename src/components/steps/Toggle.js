// styles
import './Toggle.css'

// imports
import { motion } from 'framer-motion'
import React from 'react'

export default function Toggle({setIsOn, Field, values}) {
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    
  return (
    <fieldset>
        <div className="form-toggle">
          <label className={`${values.isOn === 'false' ? 'true' : 'false'}`} htmlFor="Monthly">Monthly</label>
          <span className="toggle-wrapper">
            <Field 
              type='radio'
              name='isOn'
              id='Annually'
              value='true'
            />
            <Field 
              type='radio'
              name='isOn'
              id='Monthly'
              value='false'
            />
            {/* <input onClick={() => toggleSwitch(true)} type="radio" name="theme" id="Annually"/>
            <input onClick={() => toggleSwitch(false)} type="radio" name="theme" id="Monthly" defaultChecked/> */}
            <span aria-hidden="true" className="toggle-background"></span>
            <motion.span 
                aria-hidden="true" 
                className="toggle-switcher"
                initial={{x: values.isOn === 'false' ? '0px' : '20px'}}
                animate={{x: values.isOn === 'true' ? '27px' : '7px'}}
                transition={spring}
            ></motion.span>
          </span>
          <label className={`${values.isOn === 'true' ? 'true' : 'false'}`} htmlFor="Annually">Yearly</label>
        </div>
    </fieldset>
  )
}
