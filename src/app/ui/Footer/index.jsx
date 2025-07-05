import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';

const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'UI/UX design',
    href: '/service/ux-ui-design',
  },
  {
    title: 'Ai Solutions',
    href: '/service/data-science-ai',
  },
  {
    title: 'E-commerce web',
    href: '/service/e-commerce',
  },
  {
    title: 'Company Website',
    href: '/service/company-website',
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/a2lg_footer.png"
                  logoAlt="Logo"
                  text="Welcome to A2 Labz, We create exceptional digital products and AI solutions, partnering with startups and enterprises globally to build innovative technologies that drive results."
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle=""
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} <a href='#'>A2 Labz.</a>
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
