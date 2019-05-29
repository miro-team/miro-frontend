import React, { Component } from 'react';
import styled from 'styled-components';

import Table from 'js/components/common/Table';
import TablePager from 'js/components/common/TablePager';


function Grid({ items, tableFields, pageNum, pageCount, setPage, style }) {
    return (
        <Wrapper style={style}>
            <Table items={items} tableFields={tableFields} />
            <StyledTablePager currentPage={pageNum} pageCount={pageCount} handlePageChange={setPage} />
        </Wrapper>
    )
}

export default Grid;

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
`;

const StyledTablePager = styled(TablePager)`
    position: absolute;
    bottom: 0;
    right: 0;
`;
