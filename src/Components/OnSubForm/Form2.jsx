import React, { useState } from 'react'
// import { inputs } from '../../inputs.js'
import { FormInput } from '../Inputs/FormInput'

const inputsData = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];
export const Form2 = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        birthday: "",
        password: "",
        confirmPassword: "",
      })
      
      const handleChange =(e)=> {
          const {name,value} = e.target;
          setValues(prev=> ({
              ...prev,
              [name]:value
            }))
        }
        const handleSubmit =((e)=> {
            e.preventDefault();
        })
   console.log(inputs,'====');
        
  return (
    <div className="form-containerer">
        <form onSubmit={handleSubmit}>
            {
                inputsData.map((input)=>{ 
                    console.log(input);
                    return(
                        <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                        />
                        )
                })
            }
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              // value={fields.name}
              onChange={handleChange}
              // onBlur={isFormValidOnBlur}
              autoComplete="new-pass"
            />
            <button>Submit</button>
        </form>
    </div>
  )
}
