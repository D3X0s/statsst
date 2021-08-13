import React from 'react';
import Link from './link';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <p>Made by <Link to="https://dexo.store/" text="DeXo" />. Next Uptime 5 Min</p>
        <p>&copy; 2020 <Link to="https://status.org.cn/" text="STATUS.ORG.CN" /></p>
      </div>
    </div>
  );
}

export default Footer;
