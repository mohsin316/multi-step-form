import React from 'react'
import './Form.css'

// components
import Plan from './steps/Plan'
import AddOn from './steps/AddOn'
import PersonalInfo from './steps/PersonalInfo'
import FinishingUp from './steps/FinishingUp'
import ThankyouPage from './steps/ThankyouPage'

//utilities 
import { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'; 
import * as Yup from 'yup'

// framer motion
import { motion as m } from 'framer-motion'

export default function MyForm({step, next, prev, goto}) {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const [c1, setC1] = useState(false)
    const [c2, setC2] = useState(false)
    const [c3, setC3] = useState(false)
    const [validPlan, setValidPlan] = useState(null)

    const btn ={
      hover: {
        scale:[null, 1.1, 1.05],
        transition:{
          duration: .2
        },
      },
      tap:{
        scale: .98,
      }    
    }

    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          plan:'',
          isOn: 'false',
          checked: []
        }}
        validationSchema = {Yup.object({
          name: Yup.string()
            .max(20, 'Name must be 20 characters or less.')
            .required('Name is required.'),

          email: Yup.string()
            .email('Invalid email.')
            .required('Email is required.'),

          phone: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid')
            .required('Phone number is required.'),

          plan: validPlan ? Yup.string().required('Please select a plan.') : null
        })}

        onSubmit={ (values, {resetForm}) => {
          console.log(resetForm)

          // not the best solution to the problem. if one has not selected a plan and decides to go the previous page. they wont be able to go to the next page as the error of not selecting a plan wont allow the form to submit. :/
          if(step === 0){
            setValidPlan(true)
          }
          if (step !== 4) return next()
          
        }}
      >
        {({values, errors, touched}) => (
         
          <Form>
            {step === 0 && <PersonalInfo 
              Field={Field} 
              errors={errors} 
              touched={touched} 
              ErrorMessage={ErrorMessage}/>}
            
            {step === 1 && <Plan 
              Field={Field} 
              values={values}
              errors={errors} 
              touched={touched}
              ErrorMessage={ErrorMessage}/>}

            {step === 2 && <AddOn 
              Field={Field} 
              values={values}
              errors={errors} 
              touched={touched}
              c1={c1} 
              c2={c2} 
              c3={c3} 
              setC1={setC1} 
              setC2={setC2} 
              setC3={setC3}/>}

            {step === 3 && <FinishingUp 
              values={values}
              goto={goto}/>}

            {step === 4 && <ThankyouPage goto={goto}/>}
           
            
            <m.div 
              className="btn-container"
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{delay:.5}}
            >
              {step !== 0 && step !== 4 && <m.button 
                className='prev-btn' 
                type='button' 
                variants={btn}
                whileHover='hover'
                whileTap='tap'
                onClick={prev}
              >Go Back</m.button>}

              {step === 0 && <div></div>}
              { step !== 4 && <m.button 
                className='next-btn' 
                type='submit'
                variants={btn}
                whileHover='hover'
                whileTap='tap'
              > {step === 3 ? 'Confirm' : 'Next Step'}</m.button>}

              
            </m.div>
          </Form>
        )}
      </Formik>
    
  )
}
