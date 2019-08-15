import React from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';

// export default function createFormikField(Comp) {
//   return class extends Component {
//     static propTypes = {
//       name: PropTypes.string.isRequired,
//     }
//     render() {
//       const {name, ...props} = this.props
//       return <Field name={name} render={({ fieldProps }) => <Comp {...fieldProps} {...props} />}
//     }
//   };
// }

export default function createFormikField(Comp) {
  function FormikField({ name, ...props }) {
    return <Field name={name} render={({ field }) => <Comp {...field} {...props} />} />;
  }

  FormikField.propTypes = {
    name: PropTypes.string.isRequired,
  };

  return FormikField;
}
