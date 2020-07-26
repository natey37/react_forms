import React, {useState} from 'react';
import './App.css';
import ClassComponentForm from './ClassComponentForm'
import FunctionalComponentForm from './FunctionalComponentForm'

function App() {

  const [classComponentForm, setClassComponentForm] = useState(false)
  
  const handleClassComponentClick = () => {
    setClassComponentForm(!classComponentForm)
  }

  const [functionalComponentForm, setFunctionalComponentForm] = useState(false)

  const handleFunctionalComponentClick = () => {
    setFunctionalComponentForm(!functionalComponentForm)
  }

  return (
    <div className="App">
        <button onClick={handleClassComponentClick}>
          Click here for ClassComponentForm
        </button>
        <button onClick={handleFunctionalComponentClick}>
          Click here for FunctionalComponentForm
        </button>
        {classComponentForm && <ClassComponentForm></ClassComponentForm>}
        {functionalComponentForm && 
        <FunctionalComponentForm handleClick={handleFunctionalComponentClick}></FunctionalComponentForm>}
    </div>
  );
}

export default App;
