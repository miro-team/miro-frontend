import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';


function renderRows(data, columns, rowHeight) {
  return data.map(item => (
    <StyledTr rowHeight={rowHeight} key={uuidv4()} style={item.emptyRow && { background: '#fff' }}>
      {columns.map(column => (
        <StyledTd key={uuidv4()}>{item[column.dataField]}</StyledTd>
      ))}
    </StyledTr>
  ));
}

export default function Table({ data, columns, tableHeight, rowHeight, message, ...props }) {
  return (
    <Wrapper {...props}>
      <StyledTable tableHeight={tableHeight}>
        <StyledThead>
          <tr>
            {columns.map(column => (
              <StyledTh thWidth={column.width} key={uuidv4()}>
                {column.caption}
              </StyledTh>
            ))}
          </tr>
        </StyledThead>
        <StyledTbody>
          {message ? (
            <tr>
              <Message colSpan={columns.length}>{message}</Message>
            </tr>
          ) : (
            renderRows(data, columns, rowHeight)
          )}
        </StyledTbody>
      </StyledTable>
    </Wrapper>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  tableHeight: PropTypes.string,
  rowHeight: PropTypes.string,
  message: PropTypes.string,
};

Table.defaultProps = {
  data: [],
  columns: [],
  tableHeight: '100%',
  rowHeight: 'unset',
  message: '',
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  flex: 1;
  border-collapse: collapse;
  font-size: 14px;
  height: ${({ tableHeight }) => tableHeight};
  width: 100%;
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
  height: 45px;
`;

const Message = styled.td`
  padding: 30px;
  text-align: center;
`;
