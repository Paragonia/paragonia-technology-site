import React from 'react'
import footerStyles from './footer.module.css'

const Footer = ({ siteTitle }) => (
<div className="container-fluid">
    <footer className={`row ${footerStyles.footer}`}>
        <div className={`col-md-3 ${footerStyles.footerBrand}`}>
            <p>© 2018 Paragonia Technology B.V.</p>
        </div>
        <div className={`col-md-3 ${footerStyles.footerInfo}`}>
            <p>KVK: 72212713</p>
            <p>VAT: NL 8590.32.310.B01</p>
        </div>
    </footer>
</div>)

export default Footer
