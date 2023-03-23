import React from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  singWinWithGoogleRedirect,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up.form/sign-up-form.component';
import Button from '../../components/button/button.component';

function SignIn() {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('_________');
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>This is Sign In page</h1>
      <Button />
      <button onClick={logGoogleUser}>Sign in with google popup</button>

      <SignUpForm />
    </div>
  );
}

export default SignIn;
