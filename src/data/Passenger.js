'use strict';

import Immutable from 'immutable';

const Passenger = Immutable.Record({
  id: '',
  username: '',
  first_name: '',
  last_name: '',
  home_address: '',
  home_zip_code: '',
  work_address: '',
  work_zip_code: '',
  license_number: '',
  email: '',
  phone_number: '',
  user_id: '',
});

export default Passenger;
