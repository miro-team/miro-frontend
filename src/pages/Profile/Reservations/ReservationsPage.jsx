import React from 'react';
import { inject } from 'mobx-react';

import { compose } from 'lib/utils';
import { Reservations } from 'features/Reservations';
import { PageTitle, ContentBody } from 'ui/layout';


const CReservationsPage = () => (
  <>
    <PageTitle>Ваши резервации</PageTitle>
    <ContentBody>
      <Reservations />
    </ContentBody>
  </>
);

const mapStateToProps = () => ({});

export const ReservationsPage = compose(
  inject(mapStateToProps),
)(CReservationsPage);
