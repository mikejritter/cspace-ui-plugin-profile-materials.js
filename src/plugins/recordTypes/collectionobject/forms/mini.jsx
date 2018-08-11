const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Field
        name="relation-list-item"
        subpath="rel:relations-common-list"
        showChildren={false}
        showSiblings={false}
      />

      <Field
        name="material"
        subpath={['ns2:collectionobjects_common', 'materialGroupList', 'materialGroup', '0']}
      />

      <Field
        name="0"
        repeating={false}
        subpath={['ns2:collectionobjects_common', 'briefDescriptions', 'briefDescription']}
      />
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
