import React from 'react';
import styled from 'styled-components';


export default function Table({ data = [], columns = [], tableHeight, rowHeight, message, ...props }) {
    return (
        <Wrapper {...props}>
            <StyledTable tableHeight={tableHeight}>
                <StyledThead>
                    <tr>
                        {columns.map((column, i) => <StyledTh thWidth={column.width} key={i}>{column.caption}</StyledTh>)}
                    </tr>
                </StyledThead>
                <StyledTbody>
                    {message ?
                        <tr><Message colSpan={columns.length}>{message}</Message ></tr>
                        : renderRows(data, columns, rowHeight)
                    }
                </StyledTbody>
            </StyledTable>
        </Wrapper>
    )
}

function renderRows(data, columns, rowHeight) {
    return data.map((item, i) => (
        <StyledTr rowHeight={rowHeight} key={i} style={item.emptyRow && { background: '#fff' }}>
            {columns.map((column, i) => {
                return <StyledTd key={i}>{item[column.dataField]}</StyledTd>
            })}
        </StyledTr>
    ));
}


const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Roboto;
    height: 100%;
    overflow-x: auto;
`;

const StyledTable = styled.table`
    border-collapse: collapse;
    font-size: 14px;
    height: ${({ tableHeight }) => tableHeight};
`;

const StyledTr = styled.tr`
    background: #fff;
    height: ${({ rowHeight }) => rowHeight};
    &:nth-child(even) {
		background: #f4f8fb;
	}
`;

const StyledTd = styled.td`
    text-align: center;
    font-weight: 500;
    white-space: nowrap;
    padding: 5px;
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
    width: ${({ thWidth }) => thWidth};
    font-weight: normal;
`;

const Message = styled.td`
    padding: 30px;
    text-align: center;
`;
