import React from 'react';
import styled from 'styled-components';


export default function PageTitle({children}) {
    return (
        <Title>{children}</Title>
    )
}

const Title = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 23px;

    margin-bottom: 40px;
`;
