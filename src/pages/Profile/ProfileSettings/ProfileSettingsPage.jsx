import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'utils';
import { ProfileSettings } from 'features/ProfileSettings';
import { PageTitle, ContentBody } from 'ui';


const CProfileSettingsPage = () => (
  <>
    <PageTitle>Настройки профиля</PageTitle>
    <ContentBody>
      <ProfileSettings />
    </ContentBody>
  </>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ProfileSettingsPage = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CProfileSettingsPage);
