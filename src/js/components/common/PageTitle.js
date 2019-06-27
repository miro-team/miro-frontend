import styled from 'styled-components';

import { media } from 'js/constants/media';


const PageTitle = styled.div`
    font-family: Roboto;
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

export default PageTitle
