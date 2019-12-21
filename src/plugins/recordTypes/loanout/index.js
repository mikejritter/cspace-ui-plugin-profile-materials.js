import advancedSearch from './advancedSearch';
import forms from './forms';

export default () => (configContext) => ({
  recordTypes: {
    loanout: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});
