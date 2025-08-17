import React, { useState } from 'react';
import './Navbar.css';

const navItems = [
  { name: 'Mac', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'iPad', subMenu: [
    { title: 'Explore Support Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'iPhone', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'Watch', subMenu: [
    { title: 'Explore Support Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'AirPods', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'TV & Home', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'Entertainment', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community Community Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'Support', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
  { name: 'Where to Buy', subMenu: [
    { title: 'Explore Support', links: ['iPhone','Mac','iPad','Watch','AirPods','Music','TV'] },
    { title: 'Get Help', links: ['Community Community'] },
    { title: 'Helpful Topics', links: ['Apple Account and Password','Billing & Subscriptions','Accessibility'] },
  ]},
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mobileOpen, setMobileOpen] = useState(false);

  const hasMenu = (i) => navItems[i]?.subMenu?.length > 0;
  if(mobileOpen) console.log('open');
  return (
    <div
      className="NavbarContent"
      onMouseLeave={() => setActiveIndex(-1)}
    >
      <i className="fa-brands fa-apple"></i>

      
      <ul className="nav-links">
        {navItems.map((item, i) => (
          <li
            key={i}
            className={hasMenu(i) ? 'dropdown' : ''}
            onMouseEnter={() => hasMenu(i) ? setActiveIndex(i) : setActiveIndex(-1)}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* قائمة الموبايل */}
      
        <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
          <ul>
            {navItems.map((item, i) => (
              <li key={i}>{item.name}</li>
            ))}
          </ul>
        </div>
      

      {/* الميجا منيو */}
      <div
        className={`mega-menu ${activeIndex > -1 ? 'open' : ''}`}
      >
        <div className="mega-inner">
          {activeIndex > -1 && navItems[activeIndex].subMenu.map((col, colIndex) => (
            <div key={colIndex} className="mega-column">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <i className="fa-solid fa-magnifying-glass"></i>
      <i
        className="fa-solid fa-bars mobile-menu-icon"
        onClick={() => setMobileOpen(!mobileOpen)}
      ></i>
    </div>
  );
}
