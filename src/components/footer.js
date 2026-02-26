import React from 'react'
import footerStyles from './footer.module.css'

const Footer = ({ siteTitle }) => (
  <div className="container-fluid">
    <footer className={`row ${footerStyles.footer}`}>
      <div className={`col-md-3 ${footerStyles.footerBrand}`}>
        <p>
          &copy; 2022 - {new Date().getFullYear()} Paragonia Technology B.V.
        </p>
      </div>
      <div className={`col-md-3 ${footerStyles.footerInfo}`}>
        <p>KVK &middot; 72212713</p>
        <p>VAT &middot; NL859032310B01</p>
      </div>
    </footer>
  </div>
)

export default Footer
