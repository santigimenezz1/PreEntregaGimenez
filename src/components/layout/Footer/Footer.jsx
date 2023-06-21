import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../Footer/footer.css'

const Footer = ()=>{
    return (
       <div className="container-footer">
         <h3>Seguinos en</h3>
         <div>
          <WhatsAppIcon  className="footer-icon"/>
          <InstagramIcon className="footer-icon" />
          <FacebookIcon className="footer-icon" />
          <YouTubeIcon className="footer-icon" />

         </div>
         
      </div>
    )
}

export default Footer