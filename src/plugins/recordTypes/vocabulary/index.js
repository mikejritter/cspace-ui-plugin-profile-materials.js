import columns from './columns';

export default () => (configContext) => ({
  recordTypes: {
    vocabulary: {
      columns: columns(configContext),
    },
  },
});
