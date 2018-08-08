import fields from './fields';
import vocabularies from './vocabularies';

export default () => configContext => ({
  recordTypes: {
    material: {
      vocabularies,
      fields: fields(configContext),
    },
  },
});
