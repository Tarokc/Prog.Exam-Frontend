import Select from "react-select";
import React, { Component } from 'react';


const colourStyles = {
    control: (styles, state) => ({
        ...styles,
        color: !state.isDisabled ? "var(--dm-input-text-color)" : "var(--dm-input-text-color-disabled)",
        backgroundColor: !state.isDisabled ? "var(--dm-input-bg-color)" : "var(--dm-input-bg-color-disabled)",
        borderColor: "var(--dm-input-border-color)",
        boxShadow: "var(--dm-input-box-shadow)",
    }),
    multiValue: (styles) => ({ ...styles, backgroundColor: "var(--dark-color)" }),
    multiValueLabel: (styles) => ({ ...styles, color: "var(--dm-base-text-color)" }),
    multiValueRemove: (styles) => ({
        ...styles,
        backgroundColor: "var(--dark-color-light)",
        "&:hover": {
            backgroundColor: "rgba(211,211,211 ,1 )",
            color: "rgba(211,211,211 ,1 )",
        },
    }),
    input: (styles) => ({ ...styles, color: "var(--dm-input-text-color)", backgroundColor: "var(--dark-color-light)" }),
    option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isFocused ? "var(--dark-color-light)" : "var(--dark-color-light)",
        "&:active": {
            backgroundColor: "var(--light-color-dark)",
        },
    }),
    /*indicatorSeparator: (styles) => ({ ...styles, backgroundColor: "rgba(0,0,0,.6)" }),
    dropdownIndicator: (styles) => ({ ...styles, color: "rgba(0,0,0,.6)" }),*/
    menu: (styles) => ({ ...styles, backgroundColor: "var(--light-color)", boxShadow: "var(--dm-large-shadow)" }),
};

const CustomSelect = (props) => {
    return <Select {...props} styles={colourStyles} />;
};

export default CustomSelect;