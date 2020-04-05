import React from 'react';
import { inject } from 'mobx-react';

import { compose } from 'lib/utils';
import { ProfileSettings } from 'features/ProfileSettings';
import { PageTitle, ContentBody } from 'ui/layout';


const CProfileSettingsPage = () => (
  <>
    <PageTitle>Настройки профиля</PageTitle>
    <ContentBody>
      <ProfileSettings />
    </ContentBody>
  </>
);

const mapStateToProps = () => ({});

export const ProfileSettingsPage = compose(
  inject(mapStateToProps),
)(CProfileSettingsPage);
