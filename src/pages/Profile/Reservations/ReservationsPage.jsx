import React from 'react';
import { connect } from 'react-redux';

import { compose } from 'utils';
import { Reservations } from 'features/Reservations';
import { PageTitle, ContentBody } from 'ui';


const CReservationsPage = () => (
  <>
    <PageTitle>Ваши резервации</PageTitle>
    <ContentBody>
      <Reservations />
    </ContentBody>
  </>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = () => ({});

export const ReservationsPage = compose(
  connect(mapStateToProps, mapDispatchToProps),
)(CReservationsPage);
