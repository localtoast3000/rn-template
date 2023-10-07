import BasicHttpRequests from '../base';
import config from '@root/app.config';

export default (() => {
  return {
    ...BasicHttpRequests(config.mainApiOrigin),
  };
})();
