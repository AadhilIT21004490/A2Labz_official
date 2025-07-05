import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/paul.png',
    testimonialText:
      'A2 Labz developed an advanced e-commerce application for our Volkswagen parts business, and it’s everything we hoped for — fast, scalable, and intuitive. Their attention to detail and deep understanding of automotive e-commerce really made a difference.',
    avatarName: 'Paul',
    avatarDesignation: 'CEO - Van Tek Innovation Ltd.',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial_2.jpeg',
    testimonialText:
      'Working with A2 Labz was a game-changer for our tea business. Their team understood our vision and delivered a beautifully designed, easy-to-use e-commerce platform tailored to our UAE-based market. The user experience and performance exceeded our expectations.',
    avatarName: 'Zamah',
    avatarDesignation: 'Founder - Al Bizra Trading LLC',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/ips_test.png',
    testimonialText:
      'A2 Labz built our construction portfolio site with a perfect blend of professionalism and creativity. The layout, responsiveness, and project showcase tools have significantly improved our client engagement. They were responsive, timely, and very collaborative.',
    avatarName: 'Nihmathullah KL',
    avatarDesignation: 'Director - Intergrated Project Solutions LLC',
    ratings: '4.5',
  },
  {
    testimonialThumb: '/images/crest.png',
    testimonialText:
      'The A2 Labz team completely transformed our visual identity. From logo to uniforms, everything was designed with consistency and class. We now proudly hand out business cards and wear our brand — it feels like a real company now. Superb creative work!',
    avatarName: 'Nusky Ahamed',
    avatarDesignation: 'Manager - CrestPoint',
    ratings: '5.0',
  },
  {
    testimonialThumb: '/images/member_4.jpeg',
    testimonialText:
      'We are extremely satisfied with the branding work by A2 Labz. From the logo to business cards, everything reflected our company’s vision perfectly. They brought international quality design with local market understanding.',
    avatarName: 'Awashik',
    avatarDesignation: 'Founder - AWA Industries',
    ratings: '5.0',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
