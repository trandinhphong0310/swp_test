import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function GoogleLoginButton({ onLoginSuccess }) {
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        onLoginSuccess(decoded);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
    />
  );
}
