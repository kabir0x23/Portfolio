import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 2rem;
  place-items: center;
  column-gap: 3rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: block;
    padding: 5px;
    margin: 5px;
    column-gap: 0rem;
    row-gap: 0rem;

  }
`

export const BlogCard = styled.div`
  background: #1c1c1c;
  border-radius: 5px;
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;
export const StackContent = styled.div`
  color: #ababab;
  margin: 10px 0 10px 0;
  text-align: center;
  width: 100%;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #6f74d2;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};

  &:hover {
    transition: all 0.2s ease-in;
    background: transparent;
    color: #ff8100;
    border-color: #343434;
    font-size: 33px;
  }
`;

export const Hr = styled.hr`
  width: 75%;
  height: 1px;
  margin: 10px auto;
  border: 0;
  background: #ff8100;
`;

export const Hrx = styled.hr`
  width: 300px;
  height: 2px;
  margin: 10px auto;
  border: 0;
  background: #545454;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 15px;
  }
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 0rem 0 2rem 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding-bottom: 10px;
  }
`;

export const ExternalLinks = styled.a`
  color: #c9c9c9;
  padding: 1rem 1.5rem;
  background: transparent;
  border-radius: 5px;

  border-width: 1px;
  border-style: solid;
  border-color: #343434;
  white-space: nowrap;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: transparent;
    color: #ff8100;
    border-color: #343434;
    font-size: 18px;
  }
`;

export const TagList = styled.ul`
  width: 75%;
  margin: 10px 50px 0 50px;

  color: #d4c0c0;
  padding: 1rem 1.5rem;
  background: transparent;
  border-radius: 5px;
  justify-content: space-around;

  border-width: 1px;
  border-style: solid;
  border-color: #343434;
  //border-color: #1fa6c8;
  white-space: nowrap;
  font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
  outline: none;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 10px 50px 0 30px;
    width: 80%;
  }

`
export const Tag = styled.li`
  color: #d0d0d0;
  font-size: 1.5rem;

  &:hover {
    color: #ff8100;
  }
`
