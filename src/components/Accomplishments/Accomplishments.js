import React from 'react';

import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AccomplishmentsStyles';

const data = [
    {number: 5, text: 'Open Source Projects'},
    {number: 10, text: 'Open Source Contributions'},
    {number: 2, text: 'Communities'},
    {number: 8, text: 'Communities Members'},
    // {number: 100, text: 'Github Followers'},
    {number: 100, text: 'Github Stars'},
    {number: 1200, text: 'Twitter Followers'},

];

const data1 = [
    {number: 5, text: 'Open Source Projects'},
    {number: 3, text: 'Open Source Contributors'},
    {number: 10, text: 'Github Stars'},
    {number: 10, text: 'Twitter Followers'},
    {number: 10, text: 'Discord Community'},
    {number: 10, text: 'Telegrams Members'},
    {number: 0, text: 'YouTube Subscribers'},
    {number: 100, text: 'Instagram Followers'},
    // {number: 10, text: 'LinkedIn Followers'},
    // {number: 10, text: 'Facebook Followers'},
]

const data2 = [
    {number: 3, text: 'Open Source Projects'},
    {number: 1, text: 'Open Source Contributors'},
    // {number: 10, text: 'Github Followers'},
    {number: 10, text: 'Github Stars'},
    {number: 1200, text: 'YouTube Subscribers'},
    {number: 1700, text: 'Twitter Followers'},
    {number: 2500, text: 'Discord Community'},
    {number: 12000, text: 'Telegrams Members'},
    {number: 72000, text: 'Instagram Followers'}
    // {number: 100, text: 'LinkedIn Followers'},
]

const Accomplishments = () => (
    <>

        <Section>
            <SectionDivider divider/>
            <SectionTitle>Personal Accomplishments</SectionTitle>
            <Boxes>
                {data.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>{card.number}</BoxNum>
                        <BoxText>{card.text}</BoxText>
                    </Box>
                ))}
            </Boxes>
        </Section>

        <Section>
            <SectionTitle><a href="https://github.com/cryptoverseWeb3/" target={"_blank"}>CryptoverseWeb3 Community</a></SectionTitle>
            <title></title>
            <Boxes>
                {data1.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>{card.number}</BoxNum>
                        <BoxText>{card.text}</BoxText>
                    </Box>
                ))}
            </Boxes>
        </Section>

        <Section>
            <SectionTitle><a href="https://github.com/thecyberworld/" target={"_blank"}>Thecyberworld Community</a></SectionTitle>
            <Boxes>
                {data2.map((card, index) => (
                    <Box key={index}>
                        <BoxNum>{card.number}</BoxNum>
                        <BoxText>{card.text}</BoxText>
                    </Box>
                ))}
            </Boxes>
        </Section>
    </>
);

export default Accomplishments;
