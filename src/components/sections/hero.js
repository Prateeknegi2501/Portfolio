import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 20px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
  }

  h2,
  h3 {
    margin: 0;
  }

  h3 {
    margin-top: 10px;
    color: var(--slate);
    line-height: 1;
  }

  p {
    margin: 20px 0 0;
    max-width: 600px;
  }

  .hero-desc {
    color: var(--light-slate);
    font-size: var(--fz-lg);
    line-height: 1.6;
  }

  .highlight {
    color: var(--green);
    font-weight: 600;
  }

  .cta-buttons {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    flex-wrap: wrap;
  }

  .primary-btn {
    ${({ theme }) => theme.mixins.bigButton};
  }

  .secondary-btn {
    ${({ theme }) => theme.mixins.bigButton};
    background: transparent;

    &:hover,
    &:focus {
      background-color: rgba(100, 255, 218, 0.1);
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);

    return () => clearTimeout(timeout);
  }, [prefersReducedMotion]);

  const one = <h1>Hi, my name is</h1>;

  const two = <h2 className="big-heading">Prateek Singh Negi.</h2>;

  const three = <h3 className="big-heading">Full Stack Developer</h3>;

  const four = (
    <div className="hero-desc">
      <p>
        I'm a full-stack developer focused on building scalable, high-performance, and user-centric
        digital products using modern technologies across both frontend and backend ecosystems.
      </p>

      <p>
        I work with{" "}
        <span className="highlight">
          React, Next.js, Node.js, NestJS, Express, Prisma, PostgreSQL, MongoDB, and other modern
          web technologies
        </span>{" "}
        to create efficient and impactful solutions.
      </p>
    </div>
  );

  const five = (
    <div className="cta-buttons">
      <a className="primary-btn" href="#projects">
        View My Work
      </a>

      <a className="secondary-btn" href="mailto:yourmail@gmail.com">
        Let's Connect
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
