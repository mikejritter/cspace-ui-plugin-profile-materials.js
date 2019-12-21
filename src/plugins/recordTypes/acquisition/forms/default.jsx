const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Panel,
    Row,
    Cols,
    Col,
  } = configContext.layoutComponents;

  const {
    Field,
    InputTable,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="acquisitionReferenceNumber" />
            <Field name="accessionDateGroup" />

            <InputTable name="acquisitionAuthorizer">
              <Field name="acquisitionAuthorizer" />
              <Field name="acquisitionAuthorizerDate" />
            </InputTable>

            <Field name="acquisitionDateGroupList">
              <Field name="acquisitionDateGroup" />
            </Field>

            <Field name="acquisitionMethod" />

            <Field name="acquisitionSources">
              <Field name="acquisitionSource" />
            </Field>

            <Field name="creditLine" />
          </Col>

          <Col>
            <Field name="acquisitionReason" />
            <Field name="acquisitionNote" />
            <Field name="acquisitionProvisos" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="objectCollectionInformation" collapsible collapsed>
        <Row>
          <Field name="fieldCollectionEventNames">
            <Field name="fieldCollectionEventName" />
          </Field>
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
