import React from 'react';
import { inject } from 'mobx-react';

import { compose } from 'utils';
import { Schedule, ScheduleFilters } from 'features/Schedule';
import { Sidebar } from 'features/Sidebar';
import { Content, ContentBody, PageTitle } from 'ui';


const CSchedulePage = () => (
  <>
    <Sidebar>
      <ScheduleFilters />
    </Sidebar>
    <Content>
      <PageTitle>Поиск аудиторий</PageTitle>
      <ContentBody>
        <Schedule />
      </ContentBody>
    </Content>
  </>
);

const mapStateToProps = () => ({});

export const SchedulePage = compose(
  inject(mapStateToProps),
)(CSchedulePage);
