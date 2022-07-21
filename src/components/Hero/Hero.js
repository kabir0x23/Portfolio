import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection, DangerButton} from './HeroStyles';

const Hero = () => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Welcome to <br/>
                Personal Portfolio
            </SectionTitle>
            <SectionText>
                Working on open-source cyber-security and web projects, and communities,
                where people can contribute and get started with their open-source journey.
            </SectionText>
            <a target={"_blank"} href="https://linktree.com/kabir0x23">
                <DangerButton>Learn More</DangerButton>
            </a>
        </LeftSection>
    </Section>
);

export default Hero;
