import * as app_constants from 'constants/app_constants';

const APP_URL = app_constants.APP_NAME;

//combos
export function admin_combos_url() {
  return APP_URL + app_constants.ADMIN_COMBOS_PATH;
}

export function admin_combo_url(id) {
  return admin_combos_url() + '/' + id;
}
