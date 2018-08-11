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
    Field,
  } = configContext.recordComponents;

  const {
    extensions,
  } = configContext.config;

  return (
    <Field name="document">
      <Panel name="id" collapsible>
        <Row>
          <Col>
            <Field name="objectNumber" />
            <Field name="numberOfObjects" />

            <Field name="otherNumberList">
              <Field name="otherNumber">
                <Field name="numberValue" />
                <Field name="numberType" />
              </Field>
            </Field>

            <Field name="collection" />
            <Field name="recordStatus" />

            <Field name="publishToList">
              <Field name="publishTo" />
            </Field>
          </Col>

          <Col>
            <Field name="inventoryStatusList">
              <Field name="inventoryStatus" />
            </Field>

            <Field name="briefDescriptions">
              <Field name="briefDescription" />
            </Field>

            <Field name="materialGroupList">
              <Field name="materialGroup" tabular={false}>
                <Field name="material" label="" embedded />
              </Field>
            </Field>

            <Field name="computedCurrentLocation" />
          </Col>
        </Row>
      </Panel>

      <Panel name="desc" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectStatusList">
              <Field name="objectStatus" />
            </Field>
          </Col>

          <Col>
            <Field name="colors">
              <Field name="color" />
            </Field>
          </Col>
        </Row>

        <Field name="materialPhysicalDescriptions" subpath="ns2:collectionobjects_materials">
          <Field name="materialPhysicalDescription" />
        </Field>

        {extensions.dimension.form}
      </Panel>

      <Panel name="prod" collapsible collapsed>
        <Row>
          <Col>
            <Field name="objectProductionDateGroupList">
              <Field name="objectProductionDateGroup" />
            </Field>
          </Col>

          <Field name="objectProductionNote" />
        </Row>
      </Panel>

      <Panel name="reference" collapsible collapsed>
        <Field name="referenceGroupList">
          <Field name="referenceGroup">
            <Field name="reference" />
            <Field name="referenceNote" />
          </Field>
        </Field>
      </Panel>

      <Panel name="hierarchy" collapsible collapsed>
        <Field name="relation-list-item" subpath="rel:relations-common-list" />
      </Panel>
    </Field>
  );
};

export default configContext => ({
  template: template(configContext),
});
