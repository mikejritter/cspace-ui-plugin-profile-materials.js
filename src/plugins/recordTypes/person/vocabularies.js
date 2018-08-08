import { defineMessages } from 'react-intl';

export default {
  local: {
    disableAltTerms: true,
  },
  ulan: {
    disableAltTerms: true,
  },
  shared: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.person.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.person.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Persons',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(person_shared)',
    },
  },
};
