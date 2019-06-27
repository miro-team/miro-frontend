import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { media } from 'js/constants/media';

import Loader from 'js/components/common/Loader';
import Table from 'js/components/common/Table';
import TablePager from 'js/components/common/TablePager';


function Grid({ items, tableFields, message, mapping, pageNum, pageSize, pageCount, setPage, isPreloaderActive = false, ...props }) {
    if (Array.isArray(items)) {
        let emptyRowsCount = items.length % pageSize !== 0 ? pageSize - items.length % pageSize : 0;
        for (let i = 0; i < emptyRowsCount; i++) {
            items.push({ emptyRow: true })
        }
    }
    return (
        <Wrapper {...props}>
            {isPreloaderActive ?
                <LoaderWrapper><Loader size={250} color="#c65757" isRotating={false} /></LoaderWrapper>
                :
                <StyledTable
                    items={items}
                    tableFields={tableFields}
                    tableHeight="100%"
                    rowHeight={`${100 / pageSize}%`}
                    message={message}
                    mapping={mapping}
                />
            }
            <StyledTablePager currentPage={pageNum} pageCount={pageCount} handlePageChange={setPage} />
        </Wrapper>
    )
}

export default Grid;

const Wrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    ${media.xs} {
        align-items: center;
    }
`;

const StyledTablePager = styled(TablePager)`
    
`;

const LoaderWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Appear = keyframes`
    from {
        opacity: 0
    }
    to {
        opacity: 1
    }
`;

const StyledTable = styled(Table)`
    animation: ${Appear} 0.5s ease;
    width: 100%;
    margin-bottom: 25px;
`;
