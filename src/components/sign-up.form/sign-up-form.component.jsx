import React, { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import Button from '../button/button.component';
import FormInput from '../form-input/form-input.component';
import './sign-up-form.styles.scss';
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-ude') {
        alert('Cannot create user, email already in use');
      }
    }
  };
  return (
    <div className="sign-up-container">
      <h2> Don't have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            required: true,
            type: 'text',
            name: 'displayName',
            value: displayName,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Email"
          inputOptions={{
            required: true,
            type: 'email',
            name: 'email',
            value: email,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="password"
          inputOptions={{
            required: true,
            type: 'password',
            name: 'password',
            value: password,
            onChange: handleChange,
          }}
        />
        <FormInput
          label="Confirm password"
          inputOptions={{
            required: true,
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handleChange,
          }}
        />

        <Button type="Sumbit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
