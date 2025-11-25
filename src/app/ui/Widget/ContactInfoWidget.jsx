import React from 'react'
import { Icon } from '@iconify/react';

export default function ContactInfoWidget({withIcon, title}) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span>:''}
          +9475 220 3374 /<br/> +94 76 661 1917 /<br/> +9665 3138 2028
        </li>
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:envelope" /></span>:''}
          contact@a2labz.com
        </li>
        <span style={{ color: "white" }}><strong>Sri Lanka</strong></span>
        <img className='m-1' src='/images/lk.png' alt='sri lanka' width={30} />
        
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          166/16, Elvitigala Mw <br/>Colombo - 8, Sri Lanka
        </li>
        <span style={{ color: "white" }}><strong>Saudi Arabia </strong></span> 
          {/* <Image
            src="/profile.png"
            width={500}
            height={500}
            alt="saudi"
          /> */}
          <img src='/images/ksa.png' alt='saudi arabia' width={30} />
        <li>
          {withIcon?<span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span>:''}
          RRDE3390,7853,Al Aarid<br/>Riyadh - 13335, Saudi Arabia
        </li>
      </ul>
    </>
  )
}
