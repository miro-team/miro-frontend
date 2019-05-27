import React from 'react';
import styled from 'styled-components';


function Table({ items=[{}], dataFields }) {
    return (
        <Wrapper>
            <StyledTable>
                <StyledThead>
                    <tr>
                        {Object.keys(dataFields).map((fieldId, i) => <StyledTh key={i}>{dataFields[fieldId]}</StyledTh>)}
                    </tr>
                </StyledThead>
                <StyledTbody>
                    {items.map((item, i) => (
                        <StyledTr key={i}>
                            {Object.keys(dataFields).map((fieldId, i) => <StyledTd key={i}>{item[fieldId]}</StyledTd>)}
                        </StyledTr>
                    ))}
                </StyledTbody>
            </StyledTable>
        </Wrapper>
    )
}

export default Table;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 14px;
`;

const StyledTr = styled.tr`
    background: #fff;
    &:nth-child(even) {
		background: #f4f8fb;
	}
`;

const StyledTd = styled.td`
    padding: 20px;
    text-align: center;
    font-weight: 500;
`;

const StyledTbody = styled.tbody`
    box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.0464106);
`;

const StyledThead = styled.thead`
    
`;

const StyledTh = styled.th`
    padding: 15px;
    font-weight: normal;
`;
