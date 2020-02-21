import styled from "styled-components";

export const MenuItemContainer = styled.div`
  margin: 0 7.5px 15px;
  min-width: 30%;
  height: 200px;
  border: 1px solid black;  
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & .background-image {
      transform: scale(1.1);
		  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    } 

    & .content-container {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  ${({ theme }) => theme.md`
    height: ${ ({ size }) => size ? '380px' : '240px'};
  `}
`

export const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
`

export const ContentTitle = styled.h1`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`