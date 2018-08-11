import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    media: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
