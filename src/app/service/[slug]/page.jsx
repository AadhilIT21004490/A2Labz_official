'use client'
import { notFound } from "next/navigation";
import Accordion from "@/app/ui/Accordion";
import servicesData from "@/data/services.json";
import Image from "next/image";
import Button from "@/app/ui/Button";
import { useParams } from "next/navigation";
import IconBox from "@/app/ui/IconBox";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";


export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) return notFound();

  const {
    title,
    title2,
    subtitle,
    bgSrc,
    image,
    description,
    features
  } = service;

  const firstCol = features.slice(0, Math.ceil(features.length / 2));
  const secondCol = features.slice(Math.ceil(features.length / 2));

  return (
    <>
      <PageHeading title={title} bgSrc={bgSrc} pageLinkText={title} />
      <Spacing lg='145' md='80' />
      <Div className="container">
        <SectionHeading title="Design working process" subtitle={subtitle} variant="cs-style1 text-center" />
        <Spacing lg="90" md="45" />
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
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={image} alt="Service" className="cs-radius_15 w-100" width={600} height={400} />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">{title2}</h2>
            <p>{description}</p>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                {firstCol.map((feature, idx) => (
                  <Div key={idx}>
                    <Button btnLink="#" btnText={feature} variant="cs-type2" />
                    <Spacing lg="20" md="10" />
                  </Div>
                ))}
              </Div>
              <Div className="col-lg-6">
                {secondCol.map((feature, idx) => (
                  <Div key={idx}>
                    <Button btnLink="#" btnText={feature} variant="cs-type2" />
                    <Spacing lg="20" md="10" />
                  </Div>
                ))}
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <TestimonialSlider />
      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading title="Some pre questions and answers" subtitle="FAQ’s" />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
