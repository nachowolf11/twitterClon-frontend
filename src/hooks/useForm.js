import moment from 'moment/moment';
import { useEffect, useMemo, useRef, useState } from 'react';

/*
#Ejemplo de validaciones:

formValidations = {
    email: [ (value) => value.includes('@'),'El correo debe tener una @.' ],
    password: [ (value) => value.length >= 6,'El password debe tener mas de 6 letas.' ],
    displayName: [ (value) => value.length >= 1,'El nombre es obligatorio.' ]
  
  }
*/

export const useForm = ( initialForm = {}, formValidations = {} ) => {

  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    const fileInputRef = useRef();

    useEffect(()=>{
        createValidators();
    }, [ formState ]);

    useEffect(() => {
        setFormState( initialForm );
    }, [ initialForm ])
    

    const isFormValid = useMemo( () => {
        
        for (const formValue of Object.keys( formValidation )) {
            if( formValidation[formValue] !== null ) return false;
        }
        return true;
    }, [ formValidation ])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidators = () => {
        const formCheckedValues = {};
        for (const formField of Object.keys( formValidations )) {
            const [ fn, errorMessage ] = formValidations[formField];

            formCheckedValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage; 
        }
        setFormValidation( formCheckedValues );
    }

    const birthday = moment(`${formState.day}-${formState.month}-${formState.year}`, 'YYYY-MM-DD').toDate()

    const onFileInputChange = async({target}) => {
        setFormState({
            ...formState,
            profilePicture: URL.createObjectURL(target.files[0]),
            file: target.files[0],
        })
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        birthday,
        fileInputRef,
        onFileInputChange,

        ...formValidation,
        isFormValid,
    }
}