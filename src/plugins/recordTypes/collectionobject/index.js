import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
