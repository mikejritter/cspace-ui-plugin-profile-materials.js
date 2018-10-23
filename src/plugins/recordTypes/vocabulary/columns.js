export default (configContext) => {
  const {
    formatWorkflowStateIcon,
  } = configContext.formatHelpers;

  return {
    default: {
      workflowState: {
        flexGrow: 0,
        flexShrink: 0,
        formatValue: formatWorkflowStateIcon,
        order: 5,
        width: 32,
      },
    },
  };
};
