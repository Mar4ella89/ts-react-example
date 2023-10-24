import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
};

type Status = 'loading' | 'idle' | 'error';

export function UserComponent() {
  const [user, setUser] = useState<User>({ name: 'John Doe', email: 'john@example.com' });
  const [status, setStatus] = useState<Status>('loading')

  return <>
    New user have name: {user.name}, email: {user.email} and status: {status}
  </>
}