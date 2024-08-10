'use client';

import {
  FormEvent,
  useState,
  type FC
} from 'react';

import { handleSignIn } from '@/config/actions/auth';

const SignInForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    const error = await handleSignIn(e, email, password);
    if (error) setError(error.message);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit'>Sign In</button>
      {error && <p>{error}</p>}
    </form>
  );
}

export default SignInForm;