import React from 'react';
import styled from 'styled-components';


function TablePager({ currentPage, pageCount, handlePageChange }) {

    const canIncrement = currentPage + 1 <= pageCount;
    const canDecrement = currentPage - 1 > 0;
    
    const handleFirst = () => handlePageChange(1);
    const handleDecrement = () => { if (canDecrement) handlePageChange(currentPage - 1) }
    const handleIncrement = () => { if (canIncrement) handlePageChange(currentPage + 1) }
    const handleLast = () => handlePageChange(pageCount);

    return (
        <Wrapper>
            <Button onClick={handleFirst} disabled={!canDecrement}>{'<<'}</Button>
            <Button onClick={handleDecrement} disabled={!canDecrement}>{'<'}</Button>
            <ActivePage><PageWrapper>{currentPage}</PageWrapper></ActivePage>
            <Button onClick={handleIncrement} disabled={!canIncrement}>{'>'}</Button>
            <Button onClick={handleLast} disabled={!canIncrement}>{'>>'}</Button>
        </Wrapper>
    )
}

export default TablePager;

const Wrapper = styled.div`
    display: flex;
    width: 190px;
    justify-content: space-between;
`;

const Button = styled.button`
    width: 35px;
    height: 35px;
    /* border: 1px solid #afafaf; */
`;

const ActivePage = styled.div`
    width: 35px;
    height: 35px;
    background: #dbdbdb;
    display: flex;
    border: 1px solid #afafaf;
`;

const PageWrapper = styled.span`
    margin: auto;
    font-family: Roboto;
`;

