import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import "./forms.css"
interface props {
  handlenext: () => void;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '350px',
      },
    },
  }),
);

export const Form1: React.FC<props> = ({ handlenext }) => {
  const classes = useStyles();

  return (
    <div className="div" >
      <Formik
        initialValues={{ firstname: '', secondname: '', email: '', cnic: 0 }}
        validationSchema={yup.object({
          firstname: yup.string().max(15, 'Name should not be more than 15 character').required('Required'),
          secondname: yup.string().max(15, 'Name should not be more than 15 character').required('Required'),
          email: yup.string().email().required('The field is mandatory'),
          cnic: yup.number().integer().min(13,'Type 13 digit').required('Required').positive('Type positive number')
        })}
        onSubmit={(values) => {
          console.log(values)
          handlenext();
        }}
      >
        <Form className={classes.root}  autoComplete="off">
          <Field id="standard-basic" label="First Name" name='firstname' type='text' />
          <br/>
          <span className = "Error">
          <ErrorMessage name="firstname" />
          </span>
          <br/>
          <Field id="standard-basic" label="Second Name" name='secondname' type='text' />
          <br />
          <span className = "Error">
          <ErrorMessage name="secondname" />
          </span>
          <br />
          <Field id="standard-basic" label="Email" name='email' type='text' />
          <br/>
          <span className = "Error">
          <ErrorMessage name="email" />
          </span>
          <br />
          <Field id="standard-basic" label="CNIC" name='cnic' type='text' />
          <br/>
          <span className = "Error">
          <ErrorMessage name="cnic" />
          </span>
          <br />
          <PhoneInput
            country={'pk'}
            inputProps={{
              // country:{'us'},
              name: 'phone',
              required: true,
              autoFocus: true,
            }}
          />
          <Button variant="contained" type="submit" color="primary" disableElevation>
           Next Section
           </Button>
        </Form>
        {/* {/* </div> */}
      </Formik>
    </div>
  )
}

export const Form2 = () => {
  return (
    <div>
      Hello from Form 2
    </div>
  )
}

export const Form3 = () => {
  return (
    <div>
      Hello from Form 3
    </div>
  )
}