import { defineMessages } from 'react-intl';

export default {
  associated: {
    disabled: true,
  },
  activity: {
    disabled: true,
  },
  ethculture: {
    disabled: true,
  },
  material: {
    disabled: true,
  },
  sharedmaterial: {
    disabled: true,
  },
  materialclassification: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.concept.materialclassification.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Material Classification',
      },
      collectionName: {
        id: 'vocab.concept.materialclassification.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Material Classifications',
      },
      itemName: {
        id: 'vocab.concept.materialclassification.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Material Classification',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(materialclassification)',
    },
  },
  sharedmaterialclassification: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.concept.sharedmaterialclassification.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared Material Classification',
      },
      collectionName: {
        id: 'vocab.concept.sharedmaterialclassification.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Material Classifications',
      },
      itemName: {
        id: 'vocab.concept.sharedmaterialclassification.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Shared Material Classification',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(materialclassification_shared)',
    },
  },
  materialformtype: {
    disabled: true,
  },
};
