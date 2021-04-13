import React from 'react';

export default function UserInfo(props) {
  return (
    <div>
      {props.users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))}
    </div>
  );
}