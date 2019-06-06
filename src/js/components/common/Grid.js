import React, { Component } from 'react';
import styled from 'styled-components';

import Table from 'js/components/common/Table';
import TablePager from 'js/components/common/TablePager';


function Grid({ items, tableFields, noItemsMessage, pageNum, pageSize, pageCount, setPage, style }) {
    if (Array.isArray(items)) {
        let emptyRowsCount = items.length % pageSize !== 0 ? pageSize - items.length % pageSize : 0;
        for (let i = 0; i < emptyRowsCount; i++) {
            items.push({emptyRow: true})
        }
    }
    return (
        <Wrapper style={style}>
            <Table
                items={items}
                tableFields={tableFields}
                noItemsMessage={noItemsMessage}
                tableHeight="100%"
                rowHeight={`${100 / pageSize}%`}
            />
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
    padding-bottom: 50px;
`;

const StyledTablePager = styled(TablePager)`
    position: absolute;
    bottom: 0;
    right: 0;
`;
