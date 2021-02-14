import styled from 'styled-components';

const FooterContainer = styled.div`
  margin: 12px 0;
  padding: 16px; 40px;
  display: flex;
  flex-wrap: nowrap
  justify-content: space-between;
  width: 100%;
  height: 60px;
  border-top: 1px solid rgba(0,0,0,0.3);
`;

const Copyright = styled.div`
  font-size: 14px;
  order: 1;
  flex-grow: 2;
`;

const FollowMeWrapper = styled.div`
  order: 2;
`;

const FollowMeItem = styled.div`
  display: inline-block;
  background-color: #cecece;
  width: 16px;
  height: 16px;
  line-height: 0.8;
  margin: 4px;
  text-align: center;
`;



export {
  FooterContainer,
  Copyright,
  FollowMeWrapper,
  FollowMeItem,
};