'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Team from "@/app/ui/Team";

const teamData = [
  {
    memberImage: '/images/adl.jpg',
    memberName: 'Aadhil Shihabdeen',
    memberDesignation: 'Founder/Snr.Data Scientist',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/adlj.jpg',
    memberName: 'Aadhil Junain',
    memberDesignation: 'Founder/Snr.Software Engineer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/sabeel.jpg',
    memberName: 'Sabeel Ahamed',
    memberDesignation: 'Software Engineer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/haleem.jpg',
    memberName: 'Aleem Jabeer',
    memberDesignation: 'Business Analyst',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/shaf2.jpg',
    memberName: 'Shafa Bishirhafi',
    memberDesignation: 'Data Scientist',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/han.jpg',
    memberName: 'Hanouf Fawsikdeen ',
    memberDesignation: 'Cybersecurity Analyst',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/ashari.jpg',
    memberName: 'Ashari Aowfer',
    memberDesignation: 'Consultant-Business',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/Dana.jpg',
    memberName: 'Dana Maks',
    memberDesignation: 'Dev Ops Engieer',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
  {
    memberImage: '/images/sham2.jpg',
    memberName: 'Shamla Bishirhafi',
    memberDesignation: 'Jnr.Business Analyst',
    memberSocial: {
      linkedin: '/',
      twitter: '/',
      youtube: '/',
      facebook: '/',
    },
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHeading
        title="Our Team"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Team"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Meet our awesome <br/>team members"
          subtitle="Our Team"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          {teamData.map((item, index) => (
            <Div key={index} className="col-lg-3 col-sm-6">
              <Team
                memberImage={item.memberImage}
                memberName={item.memberName}
                memberDesignation={item.memberDesignation}
                memberSocial={item.memberSocial}
              />
              <Spacing lg="80" md="30" />
            </Div>
          ))}
        </Div>
        <Spacing lg="70" md="50" />
        <Div className="container">
          <Cta
            title="Let’s disscuse make <br />something <i>cool</i> together"
            btnText="Apply For Meeting"
            btnLink="/contact"
            bgSrc="/images/cta_bg.jpeg"
          />
        </Div>
      </Div>
    </>
  );
}
