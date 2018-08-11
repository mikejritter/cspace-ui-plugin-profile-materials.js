import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      title: {
        disabled: true,
      },
      material: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.material',
            defaultMessage: 'Material',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_common:materialGroupList/0/material',
        width: 450,
      },
    },
    narrow: {
      title: {
        disabled: true,
      },
      material: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.material',
            defaultMessage: 'Material',
          },
        }),
        order: 20,
        width: 450,
      },
    },
  };
};
