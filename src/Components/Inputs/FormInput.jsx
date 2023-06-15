import React from 'react'

export const FormInput = ({id,type,name,label,handleChange,handleCheckBox,onBlur,errmessage,...inputProps}) => {
  // console.log(name);
  return (
    <div className="input-section">
        <label>{label}</label>
        <input
            {...inputProps}
            type={type}
            name={name}
            onChange={handleChange}
            onClick={handleCheckBox}
            onBlur={onBlur}
            // focused={focused.toString()}
            // onFocus={() =>
            //   inputProps.name === "confirmPassword" && setFocused(true)
            // }
            autoComplete='false'
        />
        {errmessage && (
            <label htmlFor="" style={{ color: `var(--danger)` }}>
            *** {label} err message
            </label>
        )}
    </div>

    // <div className="input-section">
    //     <label>{label}</label>
    //     <input
    //         {...inputProps}
    //         type={type}
    //         name={name}
    //         onChange={handleChange}
    //         onBlur={handleFocus}
    //         focused={focused.toString()}
    //         onFocus={() =>
    //           inputProps.name === "confirmPassword" && setFocused(true)
    //         }
    //         autoComplete='false'
    //     />
    //     {errors.name && (
    //         <label htmlFor="" style={{ color: `var(--danger)` }}>
    //         *** {label}
    //         </label>
    //     )}
    // </div>
  )
}
