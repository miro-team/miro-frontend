import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import SemanticPagination from '@bit/semantic-org.semantic-ui-react.pagination';
import 'semantic-ui-css/components/menu.min.css';

import { Icon } from 'ui/common';


const propTypes = {};

export const Pagination = ({ ...props }) => {
  return (
    <SemanticPagination
      ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
      firstItem={{ content: <Icon name='angle double left' />, icon: true }}
      lastItem={{ content: <Icon name='angle double right' />, icon: true }}
      prevItem={{ content: <Icon name='angle left' />, icon: true }}
      nextItem={{ content: <Icon name='angle right' />, icon: true }}
      {...props}
    />
  );
};

Pagination.propTypes = propTypes;


