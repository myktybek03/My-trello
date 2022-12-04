import React from 'react';
import Link from './Link';
import { Outlet as RTROutlet } from 'react-router-dom';

const Outlet = () => {
  return (
    <div>
      <Link />
      <RTROutlet />
    </div>
  );
};

export default Outlet;
