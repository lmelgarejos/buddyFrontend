'use strict';

import Immutable from 'immutable';

const Driver = Immutable.Record({
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
});

export default Driver;
