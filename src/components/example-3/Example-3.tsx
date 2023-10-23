import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
};

type Status = 'loading' | 'idle' | 'error';

export function UserComponent() {
  const [user, setUser] = useState<User>({ name: 'John Doe', email: 'john@example.com' });
  const [status, setStatus] = useState<Status>('loading')
  return <>  {user}  have status { status}</>
}