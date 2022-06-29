import styled from 'styled-components';
import img from '../../../public/images/Hero/banner-bg.png';
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`
export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${img});
  margin-top: 0;
  padding: 260px 0 100px 0;
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;
`;
