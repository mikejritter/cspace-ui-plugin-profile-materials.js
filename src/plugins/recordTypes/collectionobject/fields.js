import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:collectionobjects_common': {
        objectStatusList: {
          objectStatus: {
            [config]: {
              view: {
                props: {
                  source: 'objectTypes',
                },
              },
            },
          },
        },
        materialGroupList: {
          materialGroup: {
            material: {
              [config]: {
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'material/local,material/shared',
                  },
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_materials': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/materials',
          },
        },
        materialPhysicalDescriptions: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialPhysicalDescription: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_materials.materialPhysicalDescription.name',
                  defaultMessage: 'Physical description',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
                props: {
                  multiline: true,
                },
              },
            },
          },
        },
      },
    },
  };
};
