/* --- Global --- */
import {PropTypes} from 'prop-types';
import {useForm} from 'react-hook-form';

/**
 * @name FormFeedback
 * @description Capture feedback from users.
 * @version 0.0.0
 */

const FormFeedback = ({sx, ...props}) => {
  /* --- Form Hook State --- */
  const {handleSubmit, register, errors} = useForm();

  /* --- Component State --- */

  /* --- Submit Handler --- */
  const onSubmit = values => {
    if (values) {
    }
  };

  /* --- Form : Component --- */
  return (
    <Atom.Box is="form" onSubmit={handleSubmit(onSubmit)}>
      <Molecule.Field
        name="feedback"
        variants={['text']}
        as="textarea"
        disabled={isComplete}
        register={register}
        errors={errors}
        sx={{
          minHeight: 300,
        }}
      />
      <Atom.Button bg="blue" color="white" sx={{mt: 3}}>
        {isComplete ? (
          <Atom.Span>Complete!</Atom.Span>
        ) : (
          <Atom.Span>Submit Feedback</Atom.Span>
        )}
      </Atom.Button>
    </Atom.Box>
  );
};

FormFeedback.defaultProps = {
  sx: {},
};

FormFeedback.propTypes = {
  sx: PropTypes.object,
};

export default FormFeedback;
