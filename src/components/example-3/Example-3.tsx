import React, { useState } from 'react';

type User = {
  name: string;
  email: string;
};

export function UserComponent() {
  const [user, setUser] = useState<User>({ name: 'John Doe', email: 'john@example.com' });
return <>  {user}  </>
}