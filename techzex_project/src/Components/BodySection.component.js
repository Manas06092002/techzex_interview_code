import React from "react";
import "./BodySection.css";
import { FaChevronDown } from "react-icons/fa";

const BodySection = () => {
  return (
    <>
      <div className="heroSection">
        {/* left section */}
        <div className="leftSection">
          <div className="categories">
            <h2>Categories</h2>
            <ul>
              <li>
                <p>
                  Lorem ipsum (3) <FaChevronDown />
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum (3) <FaChevronDown />
                </p>
              </li>
              <li>
                <p>
                  Lorem ipsum (3) <FaChevronDown />
                </p>
              </li>
            </ul>
          </div>
          <div className="priceRange">
            <h2>Price Range</h2>
            <ul>
              <li>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> $20.00 - $50.00</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> $20.00 - $50.00</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label for="vehicle1"> $20.00 - $50.00</label>
              </li>
            </ul>
          </div>
        </div>

        {/* right section */}
        <div className="rightSection">
          <h1>Our Collection Of Products</h1>

          <div class="search-bar">
            <input type="text" placeholder="Search An Item" />
            <button>🔍</button>
          </div>

          <div class="product-listing">
            <p>Showing 1–12 of 24 item(s)</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div class="product-grid">
              <div class="product-card">
                <div class="product-discount">41% Off</div>
                <img src="https://annsenglishmedium.com/images/our-blog/demo.jpg" alt="Product Image" />
                <div class="product-info">
                  <h3>Double Bed & Side Tables</h3>
                  <p class="price">
                    <del>$320.00</del> $200.00
                  </p>
                </div>
              </div>

              <div class="product-card">
                <div class="product-discount">41% Off</div>
                <img src="https://annsenglishmedium.com/images/our-blog/demo.jpg" alt="Product Image" />
                <div class="product-info">
                  <h3>Double Bed & Side Tables</h3>
                  <p class="price">
                    <del>$320.00</del> $200.00
                  </p>
                </div>
              </div>

              <div class="product-card">
                <div class="product-discount">41% Off</div>
                <img src="https://annsenglishmedium.com/images/our-blog/demo.jpg" alt="Product Image" />
                <div class="product-info">
                  <h3>Double Bed & Side Tables</h3>
                  <p class="price">
                    <del>$320.00</del> $200.00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BodySection;
