import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <div className="footerSection">
      {/* First Section */}
      <div className='fts'>
      <h1>iPhone</h1>
      <div className="footer-container top">
        {/* Column 1 */}
        <div className="footer-column">
          <p>Explore iPhone</p>
          <ul>
            <li><a href="#">Explore All iPhone</a></li>
            <li><a href="#">iPhone 16 Pro</a></li>
            <li><a href="#">iPhone 16</a></li>
            <li><a href="#">iPhone 16e</a></li>
            <li><a href="#">iPhone 15</a></li>
          </ul>
          <ul className="footer-sub">
            <li><a href="#">Compare iPhone</a></li>
            <li><a href="#">Switch from Android</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="footer-column">
          <p>More from iPhone</p>
          <ul>
            <li><a href="#">iPhone Support</a></li>
            <li><a href="#">Apple Intelligence</a></li>
            <li><a href="#">Apps by Apple</a></li>
            <li><a href="#">iPhone Privacy</a></li>
            <li><a href="#">iCloud+</a></li>
          </ul>
        </div>
      </div>
      </div>

      {/* Second Section (Big Footer) */}
      <div className="footer-container bottom">
        <div className="footer-column">
          <h4>Explore</h4>
          <ul>
            <li><a href="#">Mac</a></li>
            <li><a href="#">iPad</a></li>
            <li><a href="#">iPhone</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">AirPods</a></li>
            <li><a href="#">TV & Home</a></li>
            <li><a href="#">AirTag</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Account</h4>
          <ul>
            <li><a href="#">Manage Your Apple Account</a></li>
            <li><a href="#">iCloud.com</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Entertainment</h4>
          <ul>
            <li><a href="#">Apple One</a></li>
            <li><a href="#">Apple TV+</a></li>
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Apple Arcade</a></li>
            <li><a href="#">Apple Podcasts</a></li>
            <li><a href="#">Apple Books</a></li>
            <li><a href="#">App Store</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>About Apple</h4>
          <ul>
            <li><a href="#">Newsroom</a></li>
            <li><a href="#">Apple Leadership</a></li>
            <li><a href="#">Career Opportunities</a></li>
            <li><a href="#">Investors</a></li>
            <li><a href="#">Ethics & Compliance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <a href="#">Find a retailer near you.</a>
        <hr />
        <div className="footer-meta">
          <p>Copyright © 2025 Apple Inc. All rights reserved.</p>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Site Map</a></li>
          </ul>
          <div className="lang">
            <span>Egypt</span> | <span>عربي</span>
          </div>
        </div>
      </div>
    </div>
  )
}
