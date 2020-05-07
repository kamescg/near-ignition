import {useEffect, useState} from 'react';
import {useForm} from 'react-hook-form';

import {ToastContainer} from '@horizin/blueprint-system';

/* --- FormSettings : Component --- */
const FormSettings = ({contractAddress, ...props}) => {
  /* --- State  --- */
  const {handleSubmit, register, errors} = useForm();
  const [auto_login, setAutoLogin] = useState();
  const [tx_history, setTxHistory] = useState();

  /* --- Submit : Action  --- */
  const onSubmit = async values => {
    try {
      localStorage.setItem('ethers-react-auto-login', values.auto_login);
      ToastContainer.show({message: 'Settings Saved'});
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    try {
      const auto_login = localStorage.getItem('ethers-react-auto-login');
      const tx_history = localStorage.getItem('ethers-react-tx-history');
      setAutoLogin(JSON.parse(auto_login));
      setTxHistory(JSON.parse(tx_history));
    } catch (error) {}
  }, []);

  /* --- Error : Effect --- */

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
      <Molecule.Checkbox
        name="auto_login"
        as="checkbox"
        label="Automatic Login"
        defaultChecked={auto_login}
        register={register}
        errors={errors}
        sx={{}}
      />
      <Molecule.Checkbox
        name="transaction_history"
        as="checkbox"
        label="Transaction History Storage"
        defaultChecked={tx_history}
        register={register}
        errors={errors}
        sx={{mt: 3}}
      />

      <Atom.Button white widthFill sm mt3 sx={{variant: 'form.buttons'}}>
        {props.label}
      </Atom.Button>
    </form>
  );
};

FormSettings.defaultProps = {
  label: 'Submit',
  sxButton: {
    mt: 2,
    width: '100%',
  },
};

export default FormSettings;
