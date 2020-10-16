import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import * as yup from 'yup';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import "./forms.css"
import clsx from 'clsx';
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
interface props {
  handlenext: () => void;
}
const useStyles = makeStyles({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    alignContent : "center",
  },
  icon: {
    borderRadius: '50%',
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
});

function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export const Form1: React.FC<props> = ({ handlenext }) => {
  const classes = useStyles();
  // const classes1 = useStyles1();
  return (
    <div  className="div"  >
      <Formik
        initialValues={{ firstname: '', secondname: '', email: '', cnic: 0 }}
        validationSchema={yup.object({
          firstname: yup.string().max(15, 'Name should not be more than 15 character').required('Required'),
          secondname: yup.string().max(15, 'Name should not be more than 15 character').required('Required'),
          email: yup.string().email().required('The field is mandatory'),
          cnic: yup.number()
            .min(13, "Must be more than 10 characters")
            .required("This field is requried")
        })}
        onSubmit={(values) => {
          console.log(values)
          handlenext();
        }}
      >
        <Form className={classes.root} autoComplete="off">
          <Field className = "form" placeHolder = "First Name" name='firstname' type='text' />
          <br />
          <span className="Error">
            <ErrorMessage name="firstname" />
          </span>
          <br />
          <Field className = "form" name='secondname' placeHolder = "Second Name" type='text' />
          <br />
          <span className="Error">
            <ErrorMessage name="secondname" />
          </span>
          <br />
          <Field className = "form" name='email' type='text' placeHolder = "Email Adress" />
          <br />
          <span className="Error">
            <ErrorMessage name="email" />
          </span>
          <br />
          <Field className = "form" name='cnic' type='number' placeHolder = "Indentity Number" />
          <br />
          <span className="Error">
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
          <div className = "buttonform">
          <Button variant="contained" type="submit" color="primary" disableElevation>
            Next Section
           </Button>
           </div>
        </Form>
        {/* {/* </div> */}
      </Formik>
    </div>
  )
}

export const Form2: React.FC<props> = ({ handlenext }) => {
  const classes = useStyles();
  return (
    <div className="div1" >
      <Formik
        initialValues={{ collegename: '', degreename: '', marksscored: 0, yearofcompletion: 0 }}
        validationSchema={yup.object({
          collegename: yup.string().required('Required'),
          degreename: yup.string().required('Required'),
          marksscored: yup.number().required('Required'),
          yearofcompletion: yup.number().required('Required')
        })}
        onSubmit={(values) => {
          console.log(values)
          handlenext();
        }}
      >
        <Form className={classes.root} autoComplete="off">
        <div className = "column1"  >
        <label className = "label">College Name</label>
          <Field className = "form1" placeHolder = "Enter you college name" name='collegename' type='text' />
          <br />
          <span className="Error">
            <ErrorMessage name="collegename" />
          </span>
          <label className = "label3">Marks Scored</label>
          <Field name='marksscored' placeHolder = "Enter marks scored" type='number' className = "form1" />
          <br />
          <span className="Error">
            <ErrorMessage name="marksscored" />
          </span>
          </div>
          <div className = "column2"  >
          <span className = "label2">Degree Name</span>
          <Field name='degreename' placeHolder = "Enter you degree name" className = "form1" type='text' />
          <br />
          <span className="Error">
            <ErrorMessage name="degreename" />
          </span>
          <label className = "label4">Completion Year</label>
          <Field className = "form1" placeHolder = "Enter the year of completion" name='yearofcompletion' type='number' />
          <br />
          <span className="Error">
            <ErrorMessage name="yearofcompletion" />
          </span>
          </div>
          <br />
          <div className = "buttonform2">
          <Button variant="contained" type="submit" color="primary" disableElevation>
            Next Section
           </Button>
           </div>
        </Form>
        {/* {/* </div> */}
      </Formik>
    </div>
  )
}

export const Form3: React.FC<props> = ({ handlenext }) => {
  const classes = useStyles();
  return (
    <div className="div2" >
      <Formik
        initialValues={{ countary: '', province: '', city: '', gender: '' }}
        validationSchema={yup.object({
          countary: yup.string().required('Required'),
          province: yup.string().required('Required'),
          city: yup.string().required('Required'),
          gender: yup.string().required('Gender selection is mandatory')
        })}
        onSubmit={(values) => {
          console.log(values)
          handlenext();
        }}
      >
        <Form className={classes.root} autoComplete="off">
          <div className = "column1ofform3">
          <Field className = "form2" placeHolder = "Country name" name='countary' type='text' />
          <br />
          <span className="Error">
            <ErrorMessage name="countary" />
          </span>
          <Field name='province' className = "form2" type='text' placeHolder = "Province name" />
          <br />
          <span className="Error">
            <ErrorMessage name="province" />
          </span>
          <Field name='city' type='text' className = "form2" placeHolder = "City name" />
          <br />
          <span className="Error">
            <ErrorMessage name="city" />
          </span>
          </div>
          <div  className = "genderinfo">
        <FormLabel style = {{fontSize : "30px", color : 'yellow'}} color = "primary" component="legend">Gender</FormLabel>
          <RadioGroup defaultValue="female" aria-label="gender" name="gender">
            <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
            <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
            <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
            <FormControlLabel
              value="notinterested"
              control={<StyledRadio />}
              label="Not want to tell"
            />
          </RadioGroup>
          <span className="Error">
            <ErrorMessage name="gender" />
          </span>
          </div>
        </Form>
        {/* {/* </div> */}
      </Formik>
    </div>
  )
}