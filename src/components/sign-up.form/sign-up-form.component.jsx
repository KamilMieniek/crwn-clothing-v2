import React, { useEffect, useState } from 'react';
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

  const handlechange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) return;
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == 'auth/email-already-in-ude') {
        alert('Cannot create user, email already in use');
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h3> Sign up with your email and passsword</h3>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          inputOptions={{
            required: true,
            type: 'text',
            name: 'displayName',
            value: displayName,
            onChange: handlechange,
          }}
        />
        <FormInput
          label="Email"
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
        <FormInput
          label="Confirm password"
          inputOptions={{
            required: true,
            type: 'password',
            name: 'confirmPassword',
            value: confirmPassword,
            onChange: handlechange,
          }}
        />
        {/* <FormInput
          label="Email"
          required
          type="email"
          name="email"
          value={email}
          onChange={handlechange}
        />
        <FormInput
          label="Password"
          required
          type="password"
          name="password"
          value={password}
          onChange={handlechange}
        />
        <FormInput
          label="Confirm Password"
          required
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handlechange}
        /> */}

        <Button type="Sumbit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
