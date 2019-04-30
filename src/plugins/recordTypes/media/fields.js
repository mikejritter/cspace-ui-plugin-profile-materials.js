import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
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
      'ns2:media_materials': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media/local/materials',
          },
        },
        publishToList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          publishTo: {
            [config]: {
              defaultValue: 'urn:cspace:materials.collectionspace.org:vocabularies:name(publishto):item:name(none)\'None\'',
              messages: defineMessages({
                name: {
                  id: 'field.media_materials.publishTo.name',
                  defaultMessage: 'Publish to',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'publishto',
                },
              },
            },
          },
        },
      },
    },
  };
};
