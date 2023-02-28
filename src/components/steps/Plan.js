// styles
import './Plan.css'

//images 
import Arcade from '../../assets/icon-arcade.svg'
import Advanced from '../../assets/icon-advanced.svg'
import Pro from '../../assets/icon-pro.svg'

// components
import Toggle from './Toggle'

// framer motion
import { motion as m } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'

export default function Plan({Field, values,errors, touched, ErrorMessage}) {
  const container ={
    hidden: {
        opacity:0,
        
    },
    show: {
        opacity:1,
    },
  }
  const card ={
    hover: {
      scale:[null, 1.1, 1.05],
      transition:{
        duration: .2,
      },
      outline: '1px solid hsl(var(--purpleish-blue))'
    },
    tap:{
      scale: .98,
    },
  }
  return (
    <m.div 
      className='plan-form'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div className="radio-container">
        <Field 
          type="radio" 
          name='plan'
          id='arcade'
          value={values.isOn === 'true' ? '90' : '9'}
        />

        <m.label 
          htmlFor="arcade"
          variants={card}
          whileHover='hover'
          whileTap='tap'
        >
          <img src={Arcade} alt="arcade" />
          <div>
            <strong>Arcade</strong>
            <span>{values.isOn === 'true' ? '$90/yr' : '$9/mo'}</span>
            <AnimatePresence>
            {values.isOn === 'true' && 
                <m.small
                initial={{
                  y:'-10px',
                  opacity:0
                }} 
                animate={{
                  y:'0px',
                  opacity:1
                }}
                exit={{
                  y:'-10px',
                  opacity:0,
                  transition:{duration:0.3, type:'spring'}
                }} 
                >2 months free</m.small>}
            </AnimatePresence>
          </div>
        </m.label>

        <Field 
          type="radio" 
          name='plan'
          id='advanced'
          value={values.isOn === 'true' ? '120' : '12'}
        />

        <m.label 
          htmlFor="advanced"
          variants={card}
          whileHover='hover'
          whileTap='tap'
        >
          <img src={Advanced} alt="arcade" />
          <div>
            <strong>Advanced</strong>
            <span>{values.isOn === 'true' ? '$120/yr' : '$12/mo'}</span>
            <AnimatePresence>
            {values.isOn === 'true' && 
                <m.small
                initial={{
                  y:'-10px',
                  opacity:0
                }} 
                animate={{
                  y:'0px',
                  opacity:1
                }}
                exit={{
                  y:'-10px',
                  opacity:0,
                  transition:{duration:0.3, type:'spring'}
                }} 
                >2 months free</m.small>}
            </AnimatePresence>
          </div>
        </m.label>

        <Field 
          type="radio" 
          name='plan'
          id='pro'
          value={values.isOn === 'true' ? '150' : '15'}
        />
        <m.label 
          htmlFor="pro"
          variants={card}
          whileHover='hover'
          whileTap='tap'
        >
          <img src={Pro} alt="arcade" />
          <div>
            <strong>Pro</strong>
            <span>{values.isOn === 'true' ? '$150/yr' : '$15/mo'}</span>
            <AnimatePresence>
            {values.isOn === 'true' && 
                <m.small
                initial={{
                  y:'-10px',
                  opacity:0
                }} 
                animate={{
                  y:'0px',
                  opacity:1
                }}
                exit={{
                  y:'-10px',
                  opacity:0,
                  transition:{duration:0.3, type:'spring'}
                }} 
                >2 months free</m.small>}
            </AnimatePresence>
          </div>
        </m.label>
      </div>
      
      <Toggle Field={Field} values={values}/>

      <AnimatePresence>
      <ErrorMessage name='plan'>{msg => 
          <m.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            end={{opacity:0}}
            className={`${touched.plan && errors.plan ? 'error-message' : ''}`}
          >{msg}</m.p>
        }
        </ErrorMessage>
      </AnimatePresence>
    </m.div>
  )
}
