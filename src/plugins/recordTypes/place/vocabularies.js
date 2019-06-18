import { defineMessages } from 'react-intl';

export default {
  local: {
    disableAltTerms: true,
  },
  tgn: {
    disabled: true,
  },
  shared: {
    disableAltTerms: true,
    messages: defineMessages({
      name: {
        id: 'vocab.place.shared.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Shared',
      },
      collectionName: {
        id: 'vocab.place.shared.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Shared Places',
      },
      itemName: {
        id: 'vocab.place.shared.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Shared Place',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(place_shared)',
    },
  },
};
