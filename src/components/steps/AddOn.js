
// styles 
import './AddOn.css'

// framer motion
import { motion as m } from 'framer-motion'

export default function AddOn({Field, values,c1,c2,c3, setC1,setC2,setC3}) {

  const container ={
    hidden: {
        opacity:0,
    },
    show: {
        opacity:1,
    },
  }

  const addOn ={
    hover: {
      scale:[null, 1.08, 1.02],
      transition:{
        duration: .2,
      },
      outline: '1px solid #473dff'
    },
    tap:{
      scale: .99999,
    }    
  }

  
  return (
    <m.div 
      className='addOn-form'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience</p>

        <m.label 
          style={{
            outline: c1? '1px solid #473dff' : '',
            backgroundColor: c1? '#473dff1a' : ''
          }}
          htmlFor="online"
          variants={addOn}
          whileHover='hover'
          whileTap='tap'
        >
          <Field
            id='online'
            type="checkbox" 
            name="checked" 
            value='10,1'
            onClick={() => setC1(!c1)}
          />
          <div>
            <strong>Online service</strong>
            <small>Access to multiplayer games</small>
          </div>
          <small>{values.isOn === 'true'  ? '+$10/yr' : '+$1/mo'}</small>
        </m.label>

        <m.label 
          style={{
          outline: c2? '1px solid #473dff' : '',
          backgroundColor: c2? '#473dff1a' : ''
          }}  
          htmlFor="storage"
          variants={addOn}
          whileHover='hover'
          whileTap='tap'
        >

        <Field 
          id='storage'
          type="checkbox" 
          name="checked" 
          value='20,2'
          onClick={() => setC2(!c2)}
        />
          <div>
            <strong>Larger storage</strong>
            <small>Extra 1TB of cloud save</small>
          </div>
          <small>{values.isOn === 'true'  ? '+$20/yr' : '+$2/mo'}</small>
        </m.label>

        <m.label 
          style={{
          outline: c3? '1px solid #473dff' : '',
          backgroundColor: c3? '#473dff1a' : ''
          }}  
          variants={addOn}
          whileHover='hover'
          whileTap='tap'
          htmlFor="custom"
        >
        <Field 
          id='custom'
          type="checkbox" 
          name="checked" 
          value='30,3'
          onClick={() => setC3(!c3)}
        />
          <div>
            <strong>Customizable profile</strong>
            <small>Custom theme on your profile</small>
          </div>
          <small>{values.isOn === 'true'  ? '+$20/yr' : '+$2/mo'}</small>

        </m.label>
    </m.div>
  )
}
