import fields from './fields';
import vocabularies from './vocabularies';

export default () => ({
  recordTypes: {
    citation: {
      fields,
      vocabularies,
    },
  },
});
