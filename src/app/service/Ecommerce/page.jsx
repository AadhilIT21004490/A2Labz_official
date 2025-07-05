'use client'
import Accordion from "@/app/ui/Accordion";
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import IconBox from "@/app/ui/IconBox";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import serviceImage from '../../../../public/images/ecom.jpg'

export default function ServiceDetailsPage() {
  return (
    <>
      <PageHeading 
        title='E-Commerce Application'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='E-commerce'
      />
      <Spacing lg='145' md='80'/>
      <Div className="container">
        <SectionHeading 
          title='Design working process' 
          subtitle='E-Commerce Web Application Development' 
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45'/>
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/req.png'
              title='Requirement Gathering'
              subtitle='We start by understanding your business, goals, and challenges.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/ux.png'
              title='UI/UX Designing'
              subtitle='We create intuitive and visually appealing user interfaces.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/dev.png'
              title='Development'
              subtitle='We build your product using clean, scalable, and secure code.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/testing.png'
              title='Testing & Quality Assurance'
              subtitle='We ensure your product works flawlessly across all use cases.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/deploy.png'
              title='Deployment'
              subtitle='We launch your product with precision and minimal downtime.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon='/images/icons/sup.png'
              title='Support & Maintenance'
              subtitle='We stay with you after launch to ensure smooth performance.'
            />
            <Spacing lg='30' md='30'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='120' md='50'/>
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={serviceImage} alt="Service" className='cs-radius_15 w-100' placeholder="blur" />
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0"> E-Commerce Web Application + Advanced Dashboard</h2>
            <p>We build robust, scalable, and conversion-focused e-commerce web applications tailored to your business goals. Whether you're launching a new store or upgrading an existing platform, we deliver seamless user experiences, powerful backend management, and modern UI/UX that drive sales and customer engagement. Our solutions are built to grow with your business — optimized for performance, security, and flexibility.</p>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-lg-6">
                <Button btnLink='#' btnText='Product Management' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Shopping Cart & Checkout' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Payment Gateway Integration' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Shipping & Order Management' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='SEO & Marketing Tools' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Admin Dashboard' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                
              </Div>
              <Div className="col-lg-6">
                <Button btnLink='#' btnText='Multi-vendor marketplace setup' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Progressive Web App (PWA)' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='AI-based product recommendations' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Live chat & chatbot integration' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                <Button btnLink='#' btnText='Infographic design' variant='cs-type2'/>
                <Spacing lg='20' md='10'/>
                
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <TestimonialSlider />
      <Spacing lg='145' md='80'/>
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Some pre questions and answers' 
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion/>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
