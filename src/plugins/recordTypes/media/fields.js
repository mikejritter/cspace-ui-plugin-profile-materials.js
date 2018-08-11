export default (configContext) => {
  const {
    AutocompleteInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:media_common': {
        coverage: {
          [config]: {
            view: {
              type: AutocompleteInput,
              props: {
                source: 'material/local,material/shared,place/local',
              },
            },
          },
        },
      },
    },
  };
};
