import { defineMessages } from 'react-intl';

export default {
  local: {
    disableAltTerms: true,
  },
  shared: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.material.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.material.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Materials',
      },
      itemName: {
        id: 'vocab.material.shared.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Shared Material',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(material_shared)',
    },
  },
};
