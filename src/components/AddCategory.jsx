import { useState } from 'react';
import PropTypes from 'prop-types';

// export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

    const [ inputValue, setInputValue ] = useState('');

    // const onInputChange = (event) => {
    //     setInputValue(event.target.value)
    // }
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        //setCategories(categories => [ inputValue, ...categories ]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form
            aria-label='form'
            onSubmit={ onSubmit }
            // onSubmit={ (event) => onSubmit(event)}
        >
            <input 
                type="text"  
                placeholder="Buscar Gifs" 
                value={ inputValue }
                onChange = {onInputChange}
                // onChange = { (event) => onInputChange(event) }
            />
        </form>
    )
};

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
