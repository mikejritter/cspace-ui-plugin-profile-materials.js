export default (configContext) => {
  const {
    layoutComponents,
    lib,
    recordComponents,
  } = configContext;

  const {
    React,
  } = lib;

  const {
    Col,
    Panel,
    Row,
  } = layoutComponents;

  const {
    Field,
  } = recordComponents;

  return (
    <Field name="measuredPartGroupList">
      <Field name="measuredPartGroup">
        <Panel>
          <Row>
            <Field name="dimensionSummary" />
            <Col />
          </Row>

          <Field name="dimensionSubGroupList">
            <Field name="dimensionSubGroup">
              <Field name="dimension" />
              <Field name="value" />
              <Field name="measurementUnit" />
            </Field>
          </Field>
        </Panel>
      </Field>
    </Field>
  );
};
