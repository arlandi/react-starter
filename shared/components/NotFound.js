import React from 'react';

export default function NotFound({staticContext}) {
  if (staticContext) {
    staticContext.missed = true;
  }

  return (
    <div className='page'>
      <h1>404. These are not the droids you're looking for!</h1>
    </div>
  );
}
