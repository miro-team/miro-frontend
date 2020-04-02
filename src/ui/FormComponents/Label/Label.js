import React from 'react';
import PropTypes from 'prop-types';
import SemanticLabel from '@bit/semantic-org.semantic-ui-react.label';
import 'semantic-ui-css/components/label.min.css';


const propTypes = {};

export const Label = ({ ...props }) => {
  return (
    <SemanticLabel
      {...props} />
  );
};

Label.propTypes = propTypes;
