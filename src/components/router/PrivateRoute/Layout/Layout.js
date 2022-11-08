import React from 'react';
import Header from './Header';

export default function MainLayout({children}) {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
}
