import { Formik, Form, Field } from 'formik';

export const ContactEditorForm = ({
  initialValues = { name: '', number: '' },
  onSubmit,
  btnText,
}) => {
  const handleSubmit = async (values, actions) => {
    await onSubmit(values);
    actions.setSubmitting(false);
    actions.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <label>
            Описание
            <Field name="name" type="text" />
          </label>
          <br />
          <label>
            Ссылка
            <Field name="number" type="tel" />
          </label>
          <br />
          <button type="submit" disabled={isSubmitting}>
            {btnText}
          </button>
        </Form>
      )}
    </Formik>
  );
};