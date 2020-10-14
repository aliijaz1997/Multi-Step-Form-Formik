import { Step, StepLabel, Stepper } from '@material-ui/core';
import React, { useState } from 'react';
import { Form2, Form1, Form3 } from './components/forms'
import "./components/forms.css";

  const steplabel = () => {
    return ['1 out of 3', '2 out of 3', '3 out of 3']
  }
export default function App() {
  const [currentStep, setCurrentStep] = useState(0)
  // function to get the content of all forms
  const getcontentofstep = (stepIndex: number, gettonextstep: () => void) => {
    switch (stepIndex) {
      case 0:
        return <Form1 handlenext={gettonextstep} />
      case 1:
        return <Form2 />
      case 3:
        return <Form3 />
        default :
        return "Unknown step index";
    }
  }
  // function to go on next step

  const gettonextstep = () => {
    setCurrentStep((step : number) => step + 1)
    console.log("clicking next");
    
  }
  return (
    <div className = "background">
      <h1 className="heading">Multi-Step Form</h1>
      <Stepper activeStep = {currentStep} style = {{backgroundColor : "Linen"}} alternativeLabel >
      {steplabel().map((value) => (
          // return (
            <Step key={value}>
              <StepLabel>{value}</StepLabel>
            </Step>
          // )
      ))}
      </Stepper>
      <div>
        {getcontentofstep(currentStep, gettonextstep)}
      </div>

    </div>
  )
}