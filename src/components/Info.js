import React from 'react'

// styles
import './Info.css'

// framer motion
import { motion as m } from 'framer-motion'

export default function Info({step}) {
    const container ={
        hidden: {
            opacity:0
        },
        show: {
            opacity:1,
            transition:{
                delayChildren: .25,
                staggerChildren: .25
            }
        }
    }
    const item ={
        hidden: {
            opacity:0,
            x:'-100%'
        },
        show: {
            opacity:1,
            x:'0%',
        }
    }
    return (
    <div className='info-holder'>
        <m.div 
            className="info-container"
            variants={container}
            initial='hidden'
            animate='show'
        >
            <m.div className="step"
                variants={item}
            >
                <div className={`step-num ${step === 0 ? 'current' : ''}`}>1</div>
                <div className="step-stat">
                    <small>STEP 1</small>
                    <strong>YOUR INFO</strong>
                </div>
            </m.div>
            <m.div className="step"
                variants={item}
            >
                <div className={`step-num ${step === 1 ? 'current' : ''}`}>2</div>
                <div className="step-stat">
                    <small>STEP 2</small>
                    <strong>SELECT PLAN</strong>
                </div>
            </m.div>
            <m.div className="step"
                variants={item}
            >
                <div className={`step-num ${step === 2 ? 'current' : ''}`}>3</div>
                <div className="step-stat">
                    <small>STEP 3</small>
                    <strong>ADD-ONS</strong>
                </div>
            </m.div>
            <m.div className="step"
                variants={item}
            >
                <div className={`step-num ${step === 3 ? 'current' : ''}`}>4</div>
                <div className="step-stat">
                    <small>STEP 4</small>
                    <strong>SUMMARY</strong>
                </div>
            </m.div>
        </m.div>
    </div>
  )
}
