import { defineMessages } from 'react-intl';

export default {
  local: {
    disableAltTerms: true,
  },
  worldcat: {
    disabled: true,
  },
  shared: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.citation.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.citation.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Citations',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(citation_shared)',
    },
  },
};
