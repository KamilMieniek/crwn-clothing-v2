import React, { useState } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
const defaultFormFields = {
  email: '',
  password: '',
};
const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  // const resetFormFields = () => {
  //   setFormFields(defaultFormFields);
  // };

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = formFields;
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorect password for email');
          break;
        case 'auth/user-not-found':
          alert('user not found');
          break;
        default:
          console.log(error);
      }
    }
  };
  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2> Already have an Account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="email"
          inputOptions={{
            required: true,
            type: 'email',
            name: 'email',
            value: email,
            onChange: handlechange,
          }}
        />
        <FormInput
          label="password"
          inputOptions={{
            required: true,
            type: 'password',
            name: 'password',
            value: password,
            onChange: handlechange,
          }}
        />

        <div className="buttons-container">
          <Button type="Sumbit">Sign In</Button>
          <Button
            type="button"
            buttonType={'google'}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
