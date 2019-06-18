import { defineMessages } from 'react-intl';

export default {
  local: {
    disableAltTerms: true,
  },
  cona: {
    disabled: true,
  },
  shared: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.work.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.work.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Works',
      },
      itemName: {
        id: 'vocab.work.shared.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Shared Work',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(work_shared)',
    },
  },
};
