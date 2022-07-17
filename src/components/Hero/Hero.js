import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection} from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br/>
                Personal Portfolio
            </SectionTitle>
            <SectionText>
                I am Cyber Security Enthusiast, Web Developer, Programmer.
                Contributing to Open Source.
            </SectionText>
            <a target={"_blank"} href="https://linktree.com/kabir0x23">

            <Button>Learn More</Button>
            </a>
        </LeftSection>
    </Section>
);

export default Hero;
