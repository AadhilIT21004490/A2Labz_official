'use client'
import { notFound } from "next/navigation";
import Image from "next/image";
import Div from "@/app/ui/Div";
import Spacing from "@/app/ui/Spacing";
import SectionHeading from "@/app/ui/SectionHeading";
import Cta from "@/app/ui/Cta";
import Button from "@/app/ui/Button";
import portfolioData from "@/data/portfolioData.json";

export default function PortfolioDetails({ params }) {
  const data = portfolioData.find((item) => item.slug === params.slug);

  if (!data) return notFound();

  return (
    <>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Image
          src={data.src}
          alt={data.title}
          width={1200}
          height={650}
          className="cs-radius_15 w-100"
        />

        <Spacing lg="90" md="40" />

        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading title={data.title} subtitle={data.category}>
              <Spacing lg="40" md="20" />
              <p style={{ textAlign: "justify" }}>{data.descrption}</p>
            </SectionHeading>
          </Div>

          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30">Project Info -</h2>
            <Spacing lg="50" md="30" />

            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22">Category:</h3>
                <p className="cs-m0">{data.category}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22">Location:</h3>
                <p className="cs-m0">{data.Location}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22">Client:</h3>
                <p className="cs-m0">{data.Client}</p>
                <Spacing lg="30" md="30" />
              </Div>

              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22">Status:</h3>
                <p className="cs-m0">{data.status}</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg="65" md="10" />

        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink="/portfolio" btnText="Prev Project" variant="cs-type1" />
          </Div>
          <Div>
            <Button btnLink="/portfolio" btnText="Next Project" />
          </Div>
        </Div>
      </Div>

      <Spacing lg="145" md="80" />
      <Cta title="contact@a2labz.com" bgSrc="/images/cta_bg_2.jpeg" variant="rounded-0" />
    </>
  );
}
