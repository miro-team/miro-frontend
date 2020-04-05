import React from 'react';
import PropTypes from 'prop-types';
import SemanticTable from '@bit/semantic-org.semantic-ui-react.table';
import 'semantic-ui-css/components/table.min.css';


const Table = ({ ...props }) => {
  return (
      <SemanticTable {...props} />
  );
};

const TableBody = ({ ...props }) => {
  return (
      <SemanticTable.Body {...props} />
  );
};

const TableCell = ({ ...props }) => {
  return (
      <SemanticTable.Cell {...props} />
  );
};

const TableFooter = ({ ...props }) => {
  return (
      <SemanticTable.Footer {...props} />
  );
};

const TableHeader = ({ ...props }) => {
  return (
      <SemanticTable.Header {...props} />
  );
};

const TableHeaderCell = ({ ...props }) => {
  return (
      <SemanticTable.HeaderCell {...props} />
  );
};

const TableRow = ({ ...props }) => {
  return (
      <SemanticTable.Row {...props} />
  );
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;

export { Table };
