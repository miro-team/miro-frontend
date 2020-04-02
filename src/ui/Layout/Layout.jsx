import styled from 'styled-components';
import { media } from 'core/constants';


export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
  background: #f4f4f4;
  overflow: hidden;
  ${media.xs} {
    padding: 30px;
  }
`;

export const ContentBody = styled.div`
  display: flex;
  background: #fff;
  box-shadow: 0px 8px 21px rgba(0,0,0,0.046);
  padding: 20px;
`;

export const PageTitle = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  margin-bottom: 20px;

  ${media.xs} {
    text-align: center;
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
`;

export const InputRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  :not(:last-child) {
    margin-bottom: ${({ margin }) => margin === 'small' ? '14px' : '25px'};
  }
`;

export const InputWrapper = styled.div`
  flex: ${({ flex }) => flex || 1};
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  :not(:last-child) {
    margin-right: 10px;
  }
`;

export const InputLabel = styled.div`
  margin-bottom: 10px;
  opacity: .5;
  font-size: 13px;
  text-transform: uppercase;
`;
