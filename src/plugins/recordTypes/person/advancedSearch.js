export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termDisplayName',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:persons_common/personTermGroupList/personTermGroup/termFlag',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_common/occupations/occupation',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:persons_common/groups/group',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
