"use client";
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from "../../../public/images/about_img_1.jpeg";
import aboutImg2 from "../../../public/images/about_img_2.jpeg";
import aboutImg3 from "../../../public/images/about_img_3.jpeg";
import aboutImg4 from "../../../public/images/about_img_4.jpeg";

import Accordion from "@/app/ui/Accordion";
import Button from "@/app/ui/Button";
// import Cta from "@/app/ui/Cta";
// import Div from "@/app/ui/Div";
// import PageHeading from "@/app/ui/PageHeading";
// import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";

const funfaceData = [
  {
    title: "Global Happy Clients",
    factNumber: "113",
  },
  {
    title: "Project Completed",
    factNumber: "126",
  },
  {
    title: "Team Members",
    factNumber: "25",
  },
  {
    title: "Digital products",
    factNumber: "58",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Learn more about us, our values & how we build great software"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="About Us"
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About Our Journey"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0" style={{ textAlign: "justify" }}>
                <strong>Founded in 2019,</strong> A2 Labz began as a digital
                agency dedicated to helping businesses establish their online
                presence and meet their digital needs. Through commitment,
                creativity, and client-focused delivery, we quickly earned a
                strong reputation in the industry. As our client base grew, so
                did our team. Within a year, we expanded our capabilities into
                full-scale IT and software development, enabling us to deliver
                powerful technology solutions that streamlined operations and
                accelerated business growth. Today, our portfolio includes
                successful projects for both local and international clients,
                built with precision, quality, and long-term value. With the
                evolution of technology, we embraced the next leap—Artificial
                Intelligence and Data Science. We now empower organizations to
                make smarter, data-driven decisions and leverage advanced AI
                solutions to boost efficiency, scalability, and innovation. At
                A2 Labz, we don’t just build products — we build partnerships.
                Our mission is to deliver solutions that help businesses grow,
                stay competitive, and transform digitally.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-1 mt-5">
            <Image src={aboutImg} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image src={aboutImg2} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image src={aboutImg3} alt="About" className="w-100 cs-radius_15" />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our Path"
          subtitle="With happy clients around the world and a passionate, skilled team, our continued success is no coincidence — it’s the result of talent, trust, and teamwork."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced team with us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At A2 Labz, we don’t just build products — we build
                partnerships. Our mission is to deliver solutions that help
                businesses grow, stay competitive, and transform digitally.
              </p>
              <Spacing lg="15" md="15" />

              <Spacing lg="20" md="20" />

              {/* ✅ Added bullet points */}
              <ul className="cs-m0 cs-list">
                <li>
                  Proven track record with satisfied clients from around the
                  world
                </li>
                <li>Dedicated and talented team committed to excellence</li>
                <li>
                  Future-ready solutions powered by AI, automation, and modern
                  technologies
                </li>
                <li>
                  Transparent communication and a smooth, collaborative workflow
                </li>
                <li>
                  Quality first approach with long-term support and reliability
                </li>
              </ul>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      <Spacing lg="85" md="45" />
      <Spacing lg="85" md="45" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-4">
            <Div className="cs-faq_nav cs-radius_15">
              <h2 className="cs-faq_nav_title cs-m0">FAQ Category</h2>
              <Div className="cs-height_30 cs-height_lg_30" />
              <ul className="cs-list cs-style1 cs-mp0">
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Service related"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Support"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Project delivery"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
                <li>
                  <Button
                    variant="cs-type2"
                    btnLink="/faq"
                    btnText="Timeline"
                    icon={
                      <Icon icon="material-symbols:content-copy-outline-rounded" />
                    }
                  />
                </li>
              </ul>
            </Div>
          </Div>
          <Div className="col-lg-7 offset-lg-1">
            <Spacing lg="0" md="40" />
            <Accordion />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscus, make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
