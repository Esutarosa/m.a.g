import type { FC } from 'react';

import { Layout } from '@/components/layouts';

import { signin } from '@/config/actions/auth';

const AuthPage: FC = () => {
  return (
    <Layout isHideFooter isHideNav>
      <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={signin}>Log in</button>
      </form>
    </Layout>
  );
}

export default AuthPage;