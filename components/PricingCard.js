import "./PricingStyles.css"
import React from 'react'
import { Link } from "react-router-dom"

export const Pricing = () => {
  return (
    <div className="pricing">
      <h2 className="price-title"> Pricing</h2>
      <div className="card-container">
        <div className="card">
          <h3>-BASIC-</h3>
          <span className="bars"></span>
          <p className="btc"> $ 100</p>
          <p>-3 Days-</p>
          <p>-4 Pages</p>
          <p>-Featured-</p>
          <p>-Responsive Design-</p>
          <Link to="/contact" className="btn">PURCHASE NOW!</Link>
        </div>
        <div className="card">
          <h3>-PREMIUM-</h3>
          <span className="bars"></span>
          <p className="btc"> $ 300</p>
          <p>-5 Days-</p>
          <p>-8+ Pages</p>
          <p>-Featured-</p>
          <p>-Responsive Design-</p>
          <Link to="/contact" className="btn">PURCHASE NOW!</Link>
        </div>
        <div className="card">
          <h3>-BUSINESS-</h3>
          <span className="bars"></span>
          <p className="btc"> $ 450</p>
          <p>-7 Days-</p>
          <p>-10+ Pages</p>
          <p>-Featured-</p>
          <p>-Responsive Design-</p>
          <Link to="/contact" className="btn">PURCHASE NOW!</Link>
        </div>
      </div>
    </div>
  )
}
