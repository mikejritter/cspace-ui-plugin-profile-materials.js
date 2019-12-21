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
      <Panel name="info" collapsible>
        <Cols>
          <Col>
            <Field name="loanOutNumber" />
            <Field name="lendersAuthorizer" />
            <Field name="specialConditionsOfLoan" />
          </Col>

          <Col>
            <Field name="loanPurpose" />
            <Field name="borrower" />
            <Field name="loanOutNote" />
          </Col>
        </Cols>

        <Field name="loanStatusGroupList">
          <Field name="loanStatusGroup">
            <Field name="loanGroup" />
            <Field name="loanIndividual" />
            <Field name="loanStatus" />
            <Field name="loanStatusDate" />
            <Field name="loanStatusNote" />
          </Field>
        </Field>

        <Row>
          <Field name="loanOutDate" />
          <Field name="loanReturnDate" />
          <Field name="loanRenewalApplicationDate" />
        </Row>
      </Panel>
    </Field>
  );
};

export default (configContext) => ({
  messages: defineMessages({
    name: {
      id: 'form.loanout.default.name',
      defaultMessage: 'Standard Template',
    },
  }),
  template: template(configContext),
});
