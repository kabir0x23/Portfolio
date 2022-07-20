import styled from 'styled-components';

export const DangerButton = styled.button`
  background: transparent;
  padding: 20px 60px 20px 60px;
  font-size: 20px;
  color: #ff8100;
  border-width: 1px;
  border-color: #545454;
  border-style: solid;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background: #ff8100;
    color: #0e0e0e;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 10px 30px 10px 30px;
    font-size: 15px;
    border-width: 1px;
    cursor: pointer;
    border-radius: 10px;
  }

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
