'use strict';

import { APP_GITHUB_URL, APP_NAME, APP_DESC } from '../constants/meta';

const inviteViaEmailSubject = APP_NAME;

const inviteViaEmailBody = `Looking for an advanced Electron Boilerplate? %0D%0A Download "${APP_NAME}" - ${APP_DESC} from ${APP_GITHUB_URL} for free. %0D%0A It's Safe, Transparent, Open-Source and FREE for a lifetime!`;

export const inviteViaEmail = `mailto:?Subject=${inviteViaEmailSubject}&Body=${inviteViaEmailBody}`;
