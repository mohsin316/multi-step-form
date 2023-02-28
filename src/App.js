import './App.css';

// hooks
import { useHandleForm } from './hooks/useHandleForm'

// components
import Info from './components/Info';
import MyForm from './components/Form';

// framer motion
import { motion as m } from 'framer-motion'

function App() {
  
const {step, next, prev, goto} = useHandleForm(['0', '1', '2', '3', '4'])
  
  return (
    <m.main
      initial={{y:'-100%'}}
      animate={{y:'0%'}}
    >
      <Info
        step={step}
      />
      <MyForm 
        step={step}
        next={next} 
        prev={prev}
        goto={goto}
      />
    </m.main>
  );
}

export default App;
