import React from 'react';
import styled from 'styled-components';
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
      <StyledContentBody>
        <Schedule />
      </StyledContentBody>
    </Content>
  </>
);

const mapStateToProps = () => ({});

export const SchedulePage = compose(
  inject(mapStateToProps),
)(CSchedulePage);

const StyledContentBody = styled(ContentBody)`
  flex: 1;
`;
