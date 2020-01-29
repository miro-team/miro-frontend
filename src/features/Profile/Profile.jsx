import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

@connect(
  mapStateToProps,
  mapDispatchToProps,
)
class Profile extends Component {
  static propTypes = {};

  render() {
    return (
      <div>Profile</div>
    );
  }
}

export default Profile;
