import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import { Element, Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "../Footer/Footer";

import bacImg from '/src/assets/img/image copy 18.png'
import img1 from "/src/assets/img/image copy 11.png"
import img2 from "/src/assets/img/image copy 14.png"
import img3 from "/src/assets/img/image copy 13.png"
import img4 from "/src/assets/img/image copy 12.png"
import img5 from "/src/assets/svg/storyText.svg"
import img6 from "/src/assets/img/image copy 15.png"
import img7 from "/src/assets/img/image copy 16.png"
import img8 from "/src/assets/img/image copy 19.png"
import img9 from "/src/assets/img/image copy 20.png"
import img10 from "/src/assets/img/image copy 21.png"
import img11 from "/src/assets/img/image copy 22.png"
import img12 from "/src/assets/img/image copy 23.png"
import img13 from "/src/assets/img/IMG_0693 1.png"
import img14 from "/src/assets/img/image copy 24.png"
import img15 from "/src/assets/img/image copy 25.png"
import img16 from "/src/assets/img/image copy 26.png"

const MainSection = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const textRef3 = useRef(null);
  const textRef4 = useRef(null);
  const textRef5 = useRef(null);
  const textRef6 = useRef(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [Aos]);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start("visible");
        } else {
          controls1.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start("visible");
        } else {
          controls2.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start("visible");
        } else {
          controls3.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const observer4 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls4.start("visible");
        } else {
          controls4.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const observer5 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls5.start("visible");
        } else {
          controls5.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    const observer6 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls6.start("visible");
        } else {
          controls6.start("hidden");
        }
      },
      { threshold: 0.1 }
    );

    if (textRef1.current) observer1.observe(textRef1.current);
    if (textRef2.current) observer2.observe(textRef2.current);
    if (textRef3.current) observer3.observe(textRef3.current);
    if (textRef4.current) observer4.observe(textRef4.current);
    if (textRef5.current) observer5.observe(textRef5.current);
    if (textRef6.current) observer6.observe(textRef6.current);

    return () => {
      if (textRef1.current) observer1.unobserve(textRef1.current);
      if (textRef2.current) observer2.unobserve(textRef2.current);
      if (textRef3.current) observer3.unobserve(textRef3.current);
      if (textRef4.current) observer4.unobserve(textRef4.current);
      if (textRef5.current) observer5.unobserve(textRef5.current);
      if (textRef6.current) observer6.unobserve(textRef6.current);
    };
  }, [controls1, controls2, controls3, controls4, controls5, controls6]);

  const text = [
    "In the mystical realm of Etena, where the fabric of reality is woven from the threads of Etena Dust",
    "A pixelated essence vital for life itself, two ethereal species thrived: the enigmatic Angels and their counterparts, the Demons.",
    "Etena was a utopia, a testament to harmony and unity, until the fateful discovery that Etena Dust could be wielded for power beyond imagination.",
  ];

  const text2 = [
    "The peaceful coexistence was shattered. Angels and Demons, once allies in the stewardship of Etena, diverged on their philosophies of Etena Dust’s use.",
    "This divergence sparked a cataclysmic battle, scattering the inhabitants & consuming the Etena Dust to near extinction. The aftermath was a world fractured, its legendary inhabitants lost to myth, and the once abundant Etena Dust a rare relic of the past.",
  ];

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 },
    }),
  };

  const wordVariants2 = {
    hidden: { opacity: 0, x: 20, scale: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const wordVariants3 = {
    hidden: { opacity: 0, transform: 'rotate(-10deg)', color: '#ff0' },
    visible: (i) => ({
      opacity: 1,
      transform: 'rotate(0deg)',
      color: '#FF4B20',
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  };

  return (
    <Box>
      <Link to="section3" smooth={true} duration={1000}>
        <Box sx={{ backgroundImage: `url("${bacImg}")`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '-300px' }}>
          <Box sx={{ display: 'flex', minWidth: 'max-content', justifyContent: 'space-between', position: 'relative', height: { md: '100dvh', xs: '60vh' }, paddingTop: '400px' }}>
            <Element name="section2">
              <img data-aos='fade-down' className='upAndDown' style={{ maxWidth: '60%', height: 'auto', zIndex: '10', position: 'absolute' }} src={img1} alt="" />
            </Element>
            <Box className='upAndDown' data-aos='fade-up' sx={{ position: 'relative', display: 'flex', left: '20vw', animationDuration: '3s', top: '-2vw', justifyContent: 'center', width: '100%' }}>
              <img data-aos='fade-up' style={{ maxWidth: '90%', height: 'auto', position: 'absolute' }} src={img2} alt="" />
            </Box>
            <Box sx={{ position: 'relative', display: 'flex', top: '13vw', width: '100%' }}>
              <img data-aos='fade-up' className='upAndDown' style={{ maxWidth: '40%', height: 'auto', top: '-12vw', right: '10vw', zIndex: '10', position: 'absolute' }} src={img3} alt="" />
              <img data-aos='fade-left' style={{ maxWidth: '70%', height: 'auto', right: '0', position: 'absolute' }} src={img4} alt="" />
            </Box>
          </Box>
        </Box>
      </Link>

      <Link to="section4" smooth={true} duration={1000}>
        <Box sx={{ position: 'relative', backgroundColor: '#38231f' }}>
          <img src={img5} style={{ maxWidth: '100%', filter: 'drop-shadow(0 0 60px black)', height: 'auto', position: 'absolute', zIndex: '0' }} alt="" />
          <Box ref={textRef1} sx={{ display: 'grid', paddingTop: '150px', alignItems: 'center', gridTemplateColumns: { md: '50% 50%', xs: '1fr' }, position: 'relative', zIndex: '40' }}>
            <Box className='upAndDown' sx={{ display: 'flex', animationDuration: '4s' }}>
              <Element name="section3">
                <img data-aos='fade-right' style={{ zIndex: '40', maxWidth: '100%', filter: 'drop-shadow(0 0 50px black)', height: 'auto' }} src={img6} alt="" />
              </Element>
            </Box>
            <img src={img7} style={{ maxWidth: '30%', width: '100%', top: '18vw', height: 'auto', position: 'absolute', zIndex: '0' }} alt="" />

            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px', gap: '20px' }}>
              {text.map((sentence, index) => (
                <Typography key={index} variant='h4' sx={{
                  fontFamily: index === 0 ? 'Kaushan Script' : 'monospace',
                  color: index === 0 ? '#FF4B20' : '#e0e0e0',
                  paddingLeft: { md: index == 1 || index == 2 ? '100px' : '30px', xs: '0px' },
                  fontSize: index === 0 ? '40px' : '20px'
                }}>
                  {sentence.split(" ").map((word, i) => (
                    <motion.span className={word == 'In' ? "padL" : ''}
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate={controls1}
                      variants={wordVariants}
                      style={{ display: "inline-block", marginRight: "5px" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Link>

      <Link to="section5" smooth={true} duration={1000}>
        <Box sx={{ padding: '20px', marginTop: '50px', backgroundColor: '#38231f' }}>
          <Box ref={textRef2} sx={{ display: 'grid', alignItems: 'center', gridTemplateColumns: { md: '55% 45%', xs: '1fr' }, position: '', zIndex: '40' }}>
            <Box className='upAndDown' sx={{ display: 'flex', animationDuration: '4s' }}>
              <Element name="section4">
                <img data-aos='zoom-in-up' style={{ zIndex: '40', maxWidth: '100%', height: 'auto' }} src={img8} alt="" />
              </Element>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {text2.map((sentence, index) => (
                <Typography key={index} variant='h4' sx={{
                  fontFamily: 'monospace',
                  color: '#e0e0e0',
                  paddingLeft: { md: '30px', xs: '0px' },
                  fontSize: '20px'
                }}>
                  {sentence.split(" ").map((word, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      initial="hidden"
                      animate={controls2}
                      variants={wordVariants2}
                      style={{ display: "inline-block", marginRight: "5px" }}
                    >
                      {word}
                    </motion.span>
                  ))}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Link>

      <Link to="section6" smooth={true} duration={1000}>
        <Box sx={{ position: 'relative' }}>
          <Element name='section5'>
            <Box ref={textRef3} sx={{ display: 'flex', padding: '20px', marginTop: '50px', flexDirection: 'column', gap: '20px' }}>
              {['In the shadows of a world recovering from its own greed and violence, the Demons sensed a stirring, the faint whispers of Etena Dust rekindling. ',
                'Amidst this resurgence, three clans of Demons emerged, ready to claim their stake in the rebirth of their world.']
                .map((sentence, index) => (
                  <Typography key={index} variant='h4' sx={{
                    color: '#FF4B20',
                    paddingLeft: { md: '30px', xs: '0px' },
                    fontSize: { md: '33px', xs: '20px' },
                    maxWidth: '700px',
                    width: '100%',
                  }}>
                    {sentence.split(" ").map((word, i) => (
                      <motion.span className={i == 0 ? "padL" : ''}
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate={controls3}
                        variants={wordVariants3}
                        style={{ display: "inline-block", fontFamily: 'monospace', marginRight: "5px" }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </Typography>
                ))}
            </Box>
          </Element>
          <Box sx={{ display: { md: 'flex', xs: 'none' } }}>
            <img style={{ position: 'absolute', right: '0', height: 'auto', top: '100px', display: { md: 'none', xs: 'none' }, maxWidth: '30%', width: '100%' }} src={img9} alt="" />
          </Box>
        </Box>
      </Link>

      <Box sx={{ marginTop: '200px', position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', zIndex: '-10', position: 'absolute', padding: '20px', gap: '20px' }}>
          {['In the shadows of a world recovering from its own greed and violence, the Demons sensed a stirring, the faint whispers of Etena Dust rekindling. ',
            'Amidst this resurgence, three clans of Demons emerged, ready to claim their stake in the rebirth of their world.']
            .map((sentence, index) => (
              <Typography className='padL' key={index} variant='h4' sx={{
                color: '#FF4B20',
                opacity: 0.2,
                fontFamily: 'monospace',
                fontSize: { md: '33px', xs: '20px' },
                maxWidth: '700px',
                width: '100%',
              }}> {sentence}
              </Typography>
            ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', paddingLeft: { md: '25%', xs: '0' } }}>
          <Link to="section7" smooth={true} duration={1000}>
            <Box sx={{ position: 'relative' }}>
              <Box ref={textRef4} sx={{ display: 'grid', paddingTop: '150px', alignItems: 'center', gridTemplateColumns: { md: '50% 50%', xs: '1fr' }, position: 'relative', zIndex: '40' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Element name="section6">
                    <img className='rotate' data-aos='fade-up' style={{ zIndex: '40', maxWidth: '100%', filter: 'drop-shadow(0 0 50px black)', height: 'auto' }} src={img10} alt="" />
                  </Element>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { md: 'start', xs: 'center' }, padding: '20px', gap: '20px' }}>
                  {['The Flameborn',
                    'Masters of fire, embody the ferocity and unyielding power of volcanic eruptions. Their essence is one with the molten fury of Etena, a clan where passion and strength burn eternal.'].map((sentence, index) => (
                      <Typography key={index} variant='h4' sx={{
                        fontFamily: index === 0 ? 'Kaushan Script' : 'monospace',
                        color: '#e0e0e0',
                        paddingLeft: { md: '30px', xs: '0px' },
                        fontSize: index === 0 ? '40px' : '20px'
                      }}>
                        {sentence.split(" ").map((word, i) => (
                          <motion.span className={word == 'In' ? "padL" : ''}
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={controls4}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "5px" }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </Typography>
                    ))}
                </Box>
              </Box>
            </Box>
          </Link>

          <Link to="section8" smooth={true} duration={1000}>
            <Box sx={{ position: 'relative' }}>
              <Box ref={textRef5} sx={{ display: 'grid', paddingTop: '150px', alignItems: 'center', gridTemplateColumns: { md: '50% 50%', xs: '1fr' }, position: 'relative', zIndex: '40' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Element name="section7">
                    <img className='rotate' data-aos='fade-up' style={{ zIndex: '40', maxWidth: '100%', filter: 'drop-shadow(0 0 50px black)', height: 'auto' }} src={img11} alt="" />
                  </Element>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { md: 'start', xs: 'center' }, padding: '20px', gap: '20px' }}>
                  {['The Voidwalkers',
                    'Weavers of cosmic energies, embody the vastness and mystery of the universe. They navigate the space between stars, harnessing the celestial power to bend the fabric of reality itself.'].map((sentence, index) => (
                      <Typography key={index} variant='h4' sx={{
                        fontFamily: index === 0 ? 'Kaushan Script' : 'monospace',
                        color: '#e0e0e0',
                        paddingLeft: { md: '30px', xs: '0px' },
                        fontSize: index === 0 ? '40px' : '20px'
                      }}>
                        {sentence.split(" ").map((word, i) => (
                          <motion.span className={word == 'In' ? "padL" : ''}
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={controls5}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "5px" }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </Typography>
                    ))}
                </Box>
              </Box>
            </Box>
          </Link>

          <Link to="section9" smooth={true} duration={1000}>
            <Box sx={{ position: 'relative' }}>
              <Box ref={textRef6} sx={{ display: 'grid', paddingTop: '150px', alignItems: 'center', gridTemplateColumns: { md: '50% 50%', xs: '1fr' }, position: 'relative', zIndex: '40' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Element name="section8">
                    <img className='rotateW' data-aos='fade-up' style={{ zIndex: '40', maxWidth: '100%', filter: 'drop-shadow(0 0 50px black)', height: 'auto' }} src={img12} alt="" />
                  </Element>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: { md: 'start', xs: 'center' }, padding: '20px', gap: '20px' }}>
                  {['The Tideseekers',
                    'guardians of water, embody the depth and adaptability of the ocean. Their spirits flow with the grace and relentless force of the tides, a clan as nurturing as it is formidable.'].map((sentence, index) => (
                      <Typography key={index} variant='h4' sx={{
                        fontFamily: index === 0 ? 'Kaushan Script' : 'monospace',
                        color: '#e0e0e0',
                        paddingLeft: { md: '30px', xs: '0px' },
                        fontSize: index === 0 ? '40px' : '20px'
                      }}>
                        {sentence.split(" ").map((word, i) => (
                          <motion.span className={word == 'In' ? "padL" : ''}
                            key={i}
                            custom={i}
                            initial="hidden"
                            animate={controls6}
                            variants={wordVariants}
                            style={{ display: "inline-block", marginRight: "5px" }}
                          >
                            {word}
                          </motion.span>
                        ))}
                      </Typography>
                    ))}
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      </Box>

      <Link to="footer" smooth={true} duration={1000}>
        <Box sx={{ paddingTop: '150px', zIndex: '200', display: 'flex', flexDirection: 'column', gap: '10px', paddingX: '20px' }}>
          <Element name='section9'>
            <Typography data-aos='fade-up' variant="h4" sx={{ color: '#FF4B20', width: '100%', maxWidth: '700px', fontFamily: 'Kaushan Script', ":first-letter": { paddingLeft: '100px' } }}>This NFT project, beginning with the vivid and dynamic Demons of Etena, invites you to partake in a saga of resurgence, power, and mystery. </Typography>
          </Element>
          <Typography data-aos='fade-left' sx={{ color: '#e0e0e0', fontSize: '20px', width: '100%', maxWidth: '500px', alignSelf: 'end', fontFamily: 'monospace' }}>The future of Etena hangs in the balance, its destiny intertwined with the revival of Etena Dust and the secrets it holds.</Typography>
          <Typography data-aos='fade-right' sx={{ color: '#e0e0e0', fontSize: '20px', width: '100%', maxWidth: '500px', alignSelf: 'end', fontFamily: 'monospace' }}>Join the adventure, align with a clan, and be a part of the legend that shapes the destiny of Etena.</Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <img data-aos='fade-left' className='upAndDown' style={{ height: 'auto', alignSelf: 'center', animationDuration: '8s', width: '100%', maxWidth: '1200px' }} src={img13} alt="" />
            <img data-aos='fade-up' className='upAndDown' style={{ height: 'auto', animationDuration: '7s', position: 'absolute', top: '100px', maxWidth: '30%' }} src={img14} alt="" />
            <img data-aos='fade-right' className='upAndDown' style={{ height: 'auto', animationDuration: '6s', position: 'absolute', right: '0', maxWidth: '30%' }} src={img15} alt="" />
            <img data-aos='fade-down' className='upAndDown' style={{ height: 'auto', animationDuration: '4s', position: 'absolute', top: '200px', right: '40vw', maxWidth: '20%' }} src={img14} alt="" />
            <img data-aos='zoom-in-up' className='upAndDown' style={{ height: 'auto', animationDuration: '3s', right: '100px', top: '100px', position: 'absolute', maxWidth: '40%' }} src={img16} alt="" />
            <img data-aos='zoom-in-down' className='upAndDown' style={{ height: 'auto', animationDuration: '5s', position: 'absolute', maxWidth: '15%' }} src={img15} alt="" />
          </Box>
        </Box>
      </Link>
      <Footer />
    </Box>);
}

export default MainSection;