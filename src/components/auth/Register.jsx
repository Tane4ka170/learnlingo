import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../firebase/config';
import toast from 'react-hot-toast';
import { RegisterSchema } from '../../yupSchemas/AuthSchemas';
import {
  Description,
  ErrorMessageWrapper,
  InputField,
  StyledForm,
  SubmitButton,
  Title,
} from './Auth.styled';
import { Formik } from 'formik';

export const Register = ({ handleClose }) => {
  const [isNameEntered, setNameEntered] = useState(false);
  const [isEmailEntered, setEmailEntered] = useState(false);
  const [isPasswordEntered, setPasswordEntered] = useState(false);

  const handleSubmit = values => {
    const { email, password } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        handleClose();
      })
      .catch(() => {
        toast.error('Apologies, an error occurred. Please try again later!');
      });
  };

  return (
    <div>
      <Title>Registration</Title>
      <Description>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Description>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        {({ handleChange, handleBlur }) => (
          <StyledForm>
            <InputField
              name="name"
              placeholder={isNameEntered ? '' : 'Name'}
              onFocus={() => setNameEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="name" component="div" />
            <InputField
              type="email"
              name="email"
              placeholder={isEmailEntered ? '' : 'Email'}
              onFocus={() => setEmailEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="email" component="div" />
            <InputField
              type="password"
              name="password"
              placeholder={isPasswordEntered ? '' : 'Password'}
              onFocus={() => setPasswordEntered(true)}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <ErrorMessageWrapper name="password" component="div" />
            <SubmitButton type="submit">Sign up</SubmitButton>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};
