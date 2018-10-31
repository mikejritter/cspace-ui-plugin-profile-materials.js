import advancedSearch from './advancedSearch';
import forms from './forms';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    location: {
      vocabularies,
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
    },
  },
});
