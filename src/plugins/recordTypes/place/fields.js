export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:places_common': {
        ...extensions.address.fields,
      },
    },
  };
};
