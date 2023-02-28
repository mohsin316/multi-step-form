
// styles
import './FinishingUp.css'
// framer motion
import { motion as m } from 'framer-motion'

export default function FinishingUp({values, goto}) {
  const container ={
    hidden: {
        opacity:0,
    },
    show: {
        opacity:1,
    },
}

  const addOns = values.checked
  const plan = values.plan
  let online, storage, custom, total

  addOns.forEach(add => {
    if(add.includes('10')){
      online = [10, 1]
    }else if(add.includes('20')){
      storage = [20, 2]
    }else if(add.includes('30')){
      custom = [20, 2]
    }
  })

  const getPlan = (plan) => {
    switch(plan){
      case '90':
        return 'Arcade'
      case '9':
        return 'Arcade'
      case '120':
        return  'Advanced'
      case '12':
        return  'Advanced'
      case '150':
        return  'Pro'
      case '15':
        return  'Pro'
      default:
        return;
    }
  }

  let planName =getPlan(plan)

  if(values.isOn === 'false'){
    let onlineMonthly = 0
    let storageMonthly = 0
    let customMonthly = 0

    if(online && online.length>=1){
      onlineMonthly = Number(online[1]) 
      console.log(onlineMonthly)
    }
    if(storage && storage.length>=1){
      storageMonthly = Number(storage[1])
    }
    if(custom && custom.length>=1){
      customMonthly = Number(custom[1])
    }

    total = Number(plan) + onlineMonthly + storageMonthly + customMonthly
  }else{
    let onlineYearly = 0
    let storageYearly = 0
    let customYearly = 0
    
    if(online && online.length>=1){
      onlineYearly = Number(online[0])
      console.log(onlineYearly)

    }
    if(storage && storage.length>=1){
      storageYearly = Number(storage[0])
    }
    if(custom && custom.length>=1){
      customYearly = Number(custom[0])
    }

    total = Number(plan) + onlineYearly + storageYearly + customYearly
  }

  return (
    <m.div 
      className='finish-form'
      variants={container}
      initial='hidden'
      animate='show'
    >
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming</p>
      <div className="bill-container">
        <div className="plan">
          <div>
            <strong>{planName}({values.isOn === 'false' ? 'monthly' : 'yearly'})</strong>
            <button type='button' onClick={goto}>Change</button>
          </div>
          <small>${plan}/{values.isOn === 'false' ? 'mo' : 'yr'}</small>
        </div>
        {addOns.length >= 1 &&
          <div className="addOn">
            {online && 
              <>
              <div>
                <small>Online service</small>
                <small>{values.isOn === 'false' ? `+$${online[1]}/mo` : `+$${online[0]}/yr`}</small>
              </div>
              </>
            }
            {storage && 
              <>
              <div>
                <small>Larger storage</small>
                <small>{values.isOn === 'false' ? `+$${storage[1]}/mo` : `+$${storage[0]}/yr`}</small>
              </div>
              </>
            }
            {custom && 
              <>
              <div>
                <small>Customizable profile</small>
                <small>{values.isOn === 'false' ? `+$${custom[1]}/mo` : `+$${custom[0]}/yr`}</small>
              </div>
              </>
            }
        </div>
        }
      </div>

      <div className="summary">
        <small>Total (per {values.isOn === 'false' ? `month` : `year`})</small>
        <small> {values.isOn === 'false' ? `+$${total}/mo` : `+$${total}/yr`} </small>
      </div>
    </m.div>
  )
}
