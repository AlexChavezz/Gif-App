import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)

    }
    const handleSubmit = (e) => {
        if( inputValue.trim().length > 2){
            setCategories(category => [inputValue,...category]);
            setInputValue('');
        }else{
            alert('Please enter a value')
        }
        e.preventDefault();
    }
    return (
        <section className="search-gif">
            <form onSubmit={ handleSubmit }>
                <label>Search</label>
                <input
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    placeholder="New Category" />
                <input type="submit" value="Add" />
            </form>
        </section>
    );

}
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
export default AddCategory;
