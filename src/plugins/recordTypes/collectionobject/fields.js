import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
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
        materialHandlingGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialHandlingGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_materials.materialHandlingGroup.name',
                  defaultMessage: 'Handling',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            handling: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.handling.name',
                    defaultMessage: 'Handling',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialhandling',
                  },
                },
              },
            },
            handlingNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.handlingNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        materialContainerGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialContainerGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_materials.materialContainerGroupList.name',
                  defaultMessage: 'Container',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            container: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.container.name',
                    defaultMessage: 'Container',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialcontainer',
                  },
                },
              },
            },
            containerNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.containerNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        materialConditionGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialConditionGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_materials.materialConditionGroup.name',
                  defaultMessage: 'Condition',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            condition: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.condition.name',
                    defaultMessage: 'Condition',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialcondition',
                  },
                },
              },
            },
            conditionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.conditionNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
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
        materialFinishGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialFinishGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_materials.materialFinishGroup.name',
                  defaultMessage: 'Finish',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            finish: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.finish.name',
                    defaultMessage: 'Finish',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'materialfinish',
                  },
                },
              },
            },
            finishNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_materials.finishNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        materialGenericColors: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          materialGenericColor: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_materials.materialGenericColor.name',
                  defaultMessage: 'Generic color',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'materialgenericcolor',
                },
              },
            },
          },
        },
      },
    },
  };
};
