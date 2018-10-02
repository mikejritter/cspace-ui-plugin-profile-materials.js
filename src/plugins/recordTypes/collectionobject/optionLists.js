import { defineMessages } from 'react-intl';

export default {
  numberTypes: {
    values: [
      'callnumber',
      'lender',
      'obsolete',
      'previous',
      'serial',
      'unknown',
    ],
    messages: defineMessages({
      callnumber: {
        id: 'option.numberTypes.callnumber',
        defaultMessage: 'call number',
      },
    }),
  },
  collections: {
    values: [
      'circulating',
      'non_circulating',
    ],
    messages: defineMessages({
      circulating: {
        id: 'option.collections.circulating',
        defaultMessage: 'circulating',
      },
      non_circulating: {
        id: 'option.collections.non_circulating',
        defaultMessage: 'non-circulating',
      },
    }),
  },
  objectTypes: {
    values: [
      'fragment',
      'mock_up',
      'product',
      'prototype',
      'sample',
    ],
    messages: defineMessages({
      fragment: {
        id: 'option.objectTypes.fragment',
        defaultMessage: 'fragment',
      },
      mock_up: {
        id: 'option.objectTypes.mock_up',
        defaultMessage: 'mock-up',
      },
      product: {
        id: 'option.objectTypes.product',
        defaultMessage: 'product',
      },
      prototype: {
        id: 'option.objectTypes.prototype',
        defaultMessage: 'prototype',
      },
      sample: {
        id: 'option.objectTypes.sample',
        defaultMessage: 'sample',
      },
    }),
  },
};
