import React from 'react';

export default function NotFound({staticContext}) {
  if (staticContext) {
    staticContext.missed = true;
  }

  return (<div>404. These are not the droids you're looking for!</div>);
}
