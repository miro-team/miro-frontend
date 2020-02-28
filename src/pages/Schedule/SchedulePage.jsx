import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'utils';
import { Schedule } from 'features/Schedule';
import { SidebarFilters } from 'features/Filters';
import { Sidebar } from 'features/Sidebar';
import { Content, PageTitle } from 'ui';


const CSchedulePage = () => (
  <>
    <Sidebar>
      <SidebarFilters />
    </Sidebar>
    <Content>
      <PageTitle>Поиск аудиторий</PageTitle>
      <Schedule />
    </Content>
  </>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const SchedulePage = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CSchedulePage);
