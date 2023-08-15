
import './App.css'

import {ErrorMessage, Field, Form, Formik } from "formik";

function App() {

  return (
    <>
      <Formik initialValues= {{ email:'', password :'' }}
      validate={values=>{
        const errors = {};
        if(!values.email)
        {
          errors.email='Required Email';
        }

        if(!values.password)
        {
          errors.password="Required password"
        }

        return errors;
        
      
      }} onSubmit={(values, {setSubmitting})=>{
        setTimeout(()=>{
          alert(JSON.stringify(values,null,1));
          setSubmitting(false)
        },400)
      }}>

        {({isSubmitting})=>( 
          <Form>
           Email: <Field type="email" name="email"></Field>
            <ErrorMessage name ="email" component="div"></ErrorMessage><br/>
            Password: <Field type="password" name="password"></Field><br/>
            <ErrorMessage name="password" component="div"/>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default App
