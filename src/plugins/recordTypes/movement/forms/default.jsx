import { defineMessages } from 'react-intl';

const template = (configContext) => {
  const {
    React,
  } = configContext.lib;

  const {
    Col,
    Cols,
    Panel,
    Row,
  } = configContext.layoutComponents;

  const {
    Field,
  } = configContext.recordComponents;

  return (
    <Field name="document">
      <Panel name="location" collapsible>
        <Cols>
          <Col>
            <Field name="movementReferenceNumber" />
            <Field name="currentLocation" />
          </Col>

          <Col>
            <Field name="normalLocation" />
            <Field name="locationDate" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="movement" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="reasonForMove" />

            <Row>
              <Field name="plannedRemovalDate" />
              <Field name="removalDate" />
            </Row>
          </Col>

          <Col>
            <Field name="movementContact" />
            <Field name="movementNote" />
          </Col>
        </Cols>
      </Panel>

      <Panel name="inventory" collapsible collapsed>
        <Cols>
          <Col>
            <Field name="inventoryActionRequired" />
            <Field name="frequencyForInventory" />

            <Row>
              <Field name="inventoryDate" />
              <Field name="nextInventoryDate" />
            </Row>
          </Col>

          <Col>
            <Field name="inventoryContactList">
              <Field name="inventoryContact" />
            </Field>

            <Field name="inventoryNote" />
          </Col>
        </Cols>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.movement.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
