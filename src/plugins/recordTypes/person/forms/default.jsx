const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    InputTable,
    Field,
    Subrecord,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="info" collapsible>
        <Field name="personTermGroupList">
          <Field name="personTermGroup">
            <Panel>
              <Row>
                <Field name="termDisplayName" />
                <Field name="termName" />
                <Field name="termQualifier" />
              </Row>

              <Row>
                <Field name="termStatus" />
                <Field name="termType" />
              </Row>

              <InputTable name="termSource">
                <Field name="termSource" />
                <Field name="termSourceDetail" />
                <Field name="termSourceID" />
                <Field name="termSourceNote" />
              </InputTable>

              <InputTable name="nameDetail">
                <Field name="salutation" />
                <Field name="title" />
                <Field name="foreName" />
                <Field name="middleName" />
                <Field name="surName" />
                <Field name="nameAdditions" />
                <Field name="initials" />
              </InputTable>
            </Panel>
          </Field>
        </Field>

        <Row>
          <Col>
            <Field name="occupations">
              <Field name="occupation" />
            </Field>

            <Field name="groups">
              <Field name="group" />
            </Field>
          </Col>
          <Col>
            <Field name="nameNote" />
          </Col>
        </Row>
      </Panel>

      <Subrecord name="contact" />

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  template: template(configContext),
});
