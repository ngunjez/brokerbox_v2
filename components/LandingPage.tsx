import { BottomLogo, LandingPageContainer, Rec, RecText1, RecText2, Rights_Text, TopLogo } from '@/styles/LandingPage';
import React from 'react';

const LandingPage = () => {
  return (
    <LandingPageContainer>
        <TopLogo></TopLogo>
        <Rec>
            <RecText1>Streamlining Property <br />Listing and Matching</RecText1>
            <RecText2>For  Developers  Property owners  Agents  Buyers</RecText2>
        </Rec>
        <BottomLogo></BottomLogo>
        <Rights_Text>© {new Date().getFullYear()} Brokerbox. All rights reserved.</Rights_Text>
    </LandingPageContainer>
  )
}

export default LandingPage;