'use client';

import { Button, Input } from 'react-daisyui';
import styles from './login.module.css';
import Header from '@/components/header';

export default function Login() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.content}>
        <form className={styles.form} action="#" method="POST">
          <div>
            <label className={styles.label}>Email address</label>
            <div className="mt-2">
              <Input size="sm" className={styles.input} type="email" required />
            </div>
          </div>

          <div>
            <div className={styles.forgotPwdLabels}>
              <label htmlFor="password" className={styles.label}>
                Password
              </label>
              <div className="text-sm">
                <a href="#" className={styles.forgotPwd}>
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <Input
                size="sm"
                className={styles.input}
                type="password"
                required
              />
            </div>
          </div>

          <div>
            <Button type="submit" className={styles.signin}>
              Sign in
            </Button>
          </div>
        </form>

        <p className={styles.signupGroup}>
          Not a member?&nbsp;
          <a href="#" className={styles.signup}>
            Start a 14 day free trial
          </a>
        </p>
      </div>
    </div>
  );
}
