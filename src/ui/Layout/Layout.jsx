import styled from 'styled-components';
import { media } from 'core/constants';


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px 40px 25px 40px;
  background: #f4f4f4;
  overflow: hidden;
  ${media.xs} {
    padding: 30px;
  }
`;

export const ContentBody = styled.div`
  background: #fff;
  box-shadow: 0px 8px 21px rgba(0,0,0,0.0464106);
  padding: 20px;
`;

export const PageTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 30px;

  ${media.xs} {
    text-align: center;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const InputGroup = styled.div`
  >* {
    margin-bottom: 7px !important;
  }
`;
