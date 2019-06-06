import React from 'react';
import styled from 'styled-components';


function Table({ items, tableFields = {}, tableHeight, rowHeight, noItemsMessage = 'Отсутствуют записи', style }) {
    items = Array.isArray(items) && items.length ? items : null;
    return (
        <Wrapper style={style}>
            <StyledTable tableHeight={tableHeight}>
                <StyledThead>
                    <tr>
                        {Object.keys(tableFields).map((fieldId, i) => <StyledTh width={tableFields[fieldId].width} key={i}>{tableFields[fieldId].title}</StyledTh>)}
                    </tr>
                </StyledThead>
                <StyledTbody>
                    {!items && 
                        <tr><NoItemsTd colSpan={Object.keys(tableFields).length}>{noItemsMessage}</NoItemsTd ></tr>
                    }
                    {items && items.map((item, i) => (
                        <StyledTr rowHeight={rowHeight} key={i} style={item.emptyRow && {background: '#fff'}}>
                            {Object.keys(tableFields).map((fieldId, i) => <StyledTd key={i}>{item[fieldId]}</StyledTd>)}
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
    height: 100%;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 14px;
    height: ${({tableHeight})=>tableHeight};
`;

const StyledTr = styled.tr`
    background: #fff;
    height: ${({rowHeight})=>rowHeight};
    &:nth-child(even) {
		background: #f4f8fb;
	}
`;

const StyledTd = styled.td`
    text-align: center;
    font-weight: 500;
`;

const StyledTbody = styled.tbody`
    background: #fff;
    box-shadow: 0px 8px 21px rgba(0, 0, 0, 0.0464106);
`;

const StyledThead = styled.thead`
    font-size: 13px;
`;

const StyledTh = styled.th`
    padding: 15px;
    width: ${({ width }) => width};
    font-weight: normal;
    white-space: nowrap;
`;

const NoItemsTd = styled.td`
    padding: 30px;
    text-align: center;
`;
