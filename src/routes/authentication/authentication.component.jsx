import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  singWinWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';
import './authentication.styles.scss';
import SignUpForm from '../../components/sign-up.form/sign-up-form.component';
import Button from '../../components/button/button.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';

function Authentication() {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;
