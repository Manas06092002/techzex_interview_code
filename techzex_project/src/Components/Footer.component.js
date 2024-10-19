import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
    <footer class="footer">
        <div class="newsletter">
            <h2>Subscribe To Your Newsletter To Stay Updated About Discounts</h2>
            <input type="email" placeholder="person@email.com"/>
            <button>Subscribe</button>
        </div>
        <div class="footer-columns">
            <div>
                <h3>PRODUCTS</h3>
                <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
            <div>
                <h3>LEGAL PAGES</h3>
                <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
            <div>
                <h3>PRODUCTS</h3>
                <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
            <div>
                <h3>LEGAL PAGES</h3>
                <ul>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                    <li>Lorem Ipsum</li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright © 2023 Renew Bioriotics, Inc</p>
        </div>
    </footer>
    </>
  )
}

export default Footer