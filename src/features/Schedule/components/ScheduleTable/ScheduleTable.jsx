import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { inject } from 'mobx-react';

import { compose } from 'utils';
import { Table, Pagination } from 'ui';


const propTypes = {
  filterState: PropTypes.object.isRequired,
};

const CScheduleTable = ({ filterState }) => {
  console.log(filterState);
  return (
    <>
      <TableWrapper>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>First</Table.HeaderCell>
              <Table.HeaderCell>Second</Table.HeaderCell>
              <Table.HeaderCell>Third</Table.HeaderCell>
              <Table.HeaderCell>Forth</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
              <Table.Cell>Test</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </TableWrapper>
      <PaginationWrapper>
        {/* <Pagination size="mini" /> */}
      </PaginationWrapper>
    </>
  );
};

CScheduleTable.propTypes = propTypes;

const mapStateToProps = ({ ScheduleFilters }) => ({
  filterState: ScheduleFilters.filterState,
});

export const ScheduleTable = compose(
  inject(mapStateToProps),
)(CScheduleTable);

const TableWrapper = styled.div`
  flex: 1;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
