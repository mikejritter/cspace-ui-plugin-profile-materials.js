import { defineMessages } from 'react-intl';

export default {
  associated: {
    disableAltTerms: true,
  },
  activity: {
    disableAltTerms: true,
  },
  ethculture: {
    disabled: true,
  },
  material: {
    disableAltTerms: true,
  },
  sharedmaterial: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.concept.sharedmaterial.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared Material',
      },
      collectionName: {
        id: 'vocab.concept.sharedmaterial.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Materials',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(material_ca_shared)',
    },
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
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(materialclassification_shared)',
    },
  },
  materialformtype: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.concept.materialformtype.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Material Form Type',
      },
      collectionName: {
        id: 'vocab.concept.materialformtype.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Material Form Types',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(materialformtype)',
    },
  },
};
