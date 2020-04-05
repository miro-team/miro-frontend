import styled from 'styled-components';
import { media } from 'core/constants';


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

export const InputError = styled.div`
  font-size: 12px;
  color: #cc0000;
  border-top: 2px solid #cc0000;
  padding-top: 7px;
`;
