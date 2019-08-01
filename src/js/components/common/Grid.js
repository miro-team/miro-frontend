import React from 'react';
import styled, { keyframes } from 'styled-components';

import { media } from 'js/constants/media';

import Loader from 'js/components/common/Loader';
import Table from 'js/components/common/Table';
import TablePager from 'js/components/common/TablePager';


export default function Grid({ data, columns, message, pageNum, pageSize, pageCount, setPage, isPreloaderActive = false, ...props }) {
    
    if (Array.isArray(data)) {
        let emptyRowsCount = data.length % pageSize !== 0 ? pageSize - data.length % pageSize : 0;
        for (let i = 0; i < emptyRowsCount; i++) {
            data.push({ emptyRow: true })
        }
    }

    return (
        <Wrapper {...props}>
            <TableWrapper>
                {isPreloaderActive && 
                    <LoaderWrapper>
                        <Loader size={250} color="#c65757" isRotating={false} />
                    </LoaderWrapper>
                }
                <StyledTable
                    data={data}
                    columns={columns}
                    tableHeight="100%"
                    rowHeight={`${100 / pageSize}%`}
                    message={message}
                />
            </TableWrapper>
            <StyledTablePager currentPage={pageNum} pageCount={pageCount} handlePageChange={setPage} />
        </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-end;
    overflow-x: auto;
    ${media.xs} {
        align-items: center;
    }
`;

const StyledTablePager = styled(TablePager)`
    
`;

const LoaderWrapper = styled.div`
    position: absolute;
    background: #fff;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TableWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
    width: 100%;
    margin-bottom: 25px;
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
`;
