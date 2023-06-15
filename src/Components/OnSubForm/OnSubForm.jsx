import React, { useState } from "react";
import Image from "../../assets/signUp.jpg";
import { FormInput } from "../Inputs/FormInput";
import { useForm } from "../../Hooks/useForm";
import "./formSub.css";

export default function OnSubForm() {

  const {fields,errors,handleChange,handleCheckBox,handleSubmit,onBlur} = useForm()

  return (
    <div className="form-container">
      <div className="left-image">
        <img src={Image} alt="sign Up image" />
        {/* <h2>image</h2> */}
      </div>
      <div className="right-form">
        <form onSubmit={handleSubmit}>
            <FormInput
              label='username label'
              name='username'
              type='text'
              handleChange={handleChange}
              onBlur={onBlur}
              errmessage={errors.username}
              
            />
             <FormInput
              label='email label'
              name='email'
              type='text'
              handleChange={handleChange}
              onBlur={onBlur}
              errmessage={errors.email}
            />
            <div className="input-section">
              <label htmlFor="pass">country</label>
              <select
                name="country"
                value={fields.country}
                onChange={handleChange}
                onBlur={onBlur}
               errmessage={errors.country}
              >
                <option value="" > Select... </option>
                <option value="India"> IND </option>
                <option value="United State">US</option>
                <option value="Qatar">QTR</option>
              </select>
              {errors.country && (
                <label htmlFor="" style={{ color: `var(--danger)` }}>
                *** country err message
                </label>
              )}
            </div>
             <FormInput
              label='male'
              type='radio'
              name='gender'
              value='male'
              onBlur={onBlur}
              handleChange={handleChange}
              className='gender'
             errmessage={errors.gender}
            />
            <FormInput
              label='female'
              type='radio'
              name='gender'
              value='female'
              className='gender'
              onBlur={onBlur}
              handleChange={handleChange}
              errmessage={errors.gender}
            />
            <FormInput
            label='Born Year'
              type='date'
              name='dob'
              value= {fields.dob}
              handleChange={handleChange}
              onBlur={onBlur}
              errmessage={errors.dob}
            />
            <div className="check-section">
                <FormInput
                  name='skills'
                  type='checkbox'
                  value='javascript'
                  label='Javascript'
                  handleCheckBox={handleCheckBox}
                  onBlur={onBlur}
                  errmessage={errors.skills}
                  
                />
                <FormInput
                  name='skills'
                  type='checkbox'
                  value='Typescript'
                  label='Typescript'
                  handleCheckBox={handleCheckBox}
                  onBlur={onBlur}
                  errmessage={errors.skills}

                />
                <FormInput
                  name='skills'
                  type='checkbox'
                  value='React-Js'
                  label='React Js'
                  handleCheckBox={handleCheckBox}
                  onBlur={onBlur}
                  errmessage={errors.skills}

                />
                <FormInput
                  name='skills'
                  type='checkbox'
                  value='Vue-Js'
                  label='Vue Js'
                  handleCheckBox={handleCheckBox}
                  onBlur={onBlur}
                  errmessage={errors.skills}

                />
             </div>
          <button type="submit">Submit</button>
          </form>
      </div>
    </div>
  );
}
  // const isFormValidOnSubmit = () => {
  //   // debugger;
  //   const errs = {
  //     username: false,
  //     email: false,
  //     gender: false,
  //     country: false,
  //     skills : false,
  //     dob: false
  //   };
  
    // if (fields.username === "") errs.name = true;
    // if (fields.email === "") errs.email = true;
    // if (fields.gender === "") errs.gender = true;
    // if (fields.country === "") errs.country = true;
    // if(fields.dob === "") errs.dob = true;
    // if (fields.skills.length===0)errs.skills = true

    // setErrors(errs);
    // if (Object.values(errs).some((err) => err === true)) return false;
    // else return true;

    // if (Object.values(errors).some((err) => err === true)) return false;
    // else return true;
  //}

  // const customValidate = (e)=>{
  //   // debugger
  //   console.log('in  custom fn');
  //   const { name, value } = e.target;
  //   console.log(name, value,'===change log');
  //   console.log(name,'in change  input');
  //   if (value.trim()==="") {
  //     let errs = false
  //     if (name=='username' ) {errs = true; }
  //     if (name=='email' && value === "" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value)) {errs = true; }
  //     if (name=='gender') {errs = true; }
  //     if (name=='country') {errs = true; }
  //     if(name=='dob') {errs = true; }
  //     setErrors(prev=> ({
  //       ...prev,
  //       [name]: errs
  //     }))
  // }else{
  //   setFields((prev) => ({
  //     ...prev,
  //     [name]: value,
  //   }));
  // }}

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (isFormValidOnSubmit()) {
  //     alert("success............");
  //   } else {
  //     alert("There is an Error!");
  //   }
  //   console.log(errors);
  // };

  // const handleChange = (e) => {
  //   // debugger
  //   customValidate(e)
  //     // if (name==skills.length===0)errs.skills = true
  //     // console.log(errors[nm],'in change  input');
    
  //   // isFormValidOnBlur(e) iuiyuiyuiyuiyuiyuiu
  // };
  // console.log(errors);

  // const handleCheckBox = (e) => {
  //   const { name, value, checked } = e.target;
  //   console.log(name, value, checked, fields.skills);

  //   let newSkills = [...fields.skills];
    
  //   if (checked) newSkills.push(value);
  //   else newSkills = newSkills.filter((itm) => itm !== value);
  //   setFields((prev) => ({
  //     ...prev,
  //     [name]: newSkills,
  //   }));
  // };

  // const isFormValidOnBlur = (event) => {
  //   // debugger;
  //   console.log('isFormValidOnBlur');

  //   const { name, value } = event.target;
  //   // console.log(name.length);
  //   let error = false;
  //   if (name === "username" && value === "") {
  //     error = true;
  //   } else if (
  //     name === "email" &&
  //     (value === "" ||
  //       !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
  //         value
  //       ))
  //   ) {
  //     error = true;
  //   } else if (name === "gender" && value === "") {
  //     error = true;
  //   } else if (name === "country" && value === "") {
  //     error = true;
  //     console.log('in select error if');
  //   } else if (name ==='skills' && name.length === 0){
  //     error.skills= true ;
  //     console.log('in skill error blur if');
  //   }
  //   setErrors((prev) => ({
  //     ...prev,
  //     [name]: error,
  //   }));
  // };
// console.log(fields,'fields log');

 
            {/* <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              // value={fields.name}
              onChange={handleChange}
              // onBlur={isFormValidOnBlur}
              autoComplete="new-pass"
            />
            {errors.name && (
              <label htmlFor="" style={{ color: `var(--danger)` }}>
                *** Make Sure you Fill The Name
              </label>
            )} */}
          {/* <div className="input-section">
            <label htmlFor="email">E-mail</label>
            <input
              type="text"
              name="email"
              value={fields.email}
              onChange={handleChange}
              // onBlur={isFormValidOnBlur}
              autoComplete="new-pass"
            />
            {errors.email && (
              <label htmlFor="" style={{ color: `var(--danger)` }}>
                *** Make Sure you Fill The Email
              </label>
            )}
          </div> */}
          
          

          {/*<div className="input-section">
            <label htmlFor="pass">Gender</label>
             <div className="gender-group">
              <span>
                <label htmlFor="">Male</label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChange}
                  onBlur={isFormValidOnBlur}
                  className="gender"
                  value="male"
                />
              </span> */}
              {/* <span>
                <label htmlFor="">Female</label>
                <input
                  type="radio"
                  name="gender"
                  onChange={handleChange}
                  onBlur={isFormValidOnBlur}
                  className="gender"
                  value="female"
                />
              </span> 
            </div>*/}
            {/* {errors.gender && (
              <label htmlFor="" style={{ color: `var(--danger)` }}>
                *** Make Sure you Choose The Gender
              </label>
            )} 
          </div> */}
          {/* <div className="input-section">
            <label htmlFor="">Born Year</label>
            <input type='date' name="dob" value={fields.dob} onChange={handleChange} 
            />
            {errors.dob && (
              <label htmlFor="" style={{ color: `var(--danger)` }}>
                *** Make Sure you select a Date
              </label>
            )}
          </div> */}
          
        

          {/* <div className="check-section">
            <input
              type="checkbox"
              onChange={handleCheckBox}
              onBlur={isFormValidOnBlur}
              name="skills"
              value="Javascript"
            />
            <label htmlFor="Javascript">Javascript</label>

            <input
              type="checkbox"
              onChange={handleCheckBox}
              onBlur={isFormValidOnBlur}
              name="skills"
              value="React"
            />
            <label htmlFor="React">React</label>

            <input
              type="checkbox"
              onChange={handleCheckBox}
              onBlur={isFormValidOnBlur}
              name="skills"
              value="Vue js"
            />
            <label htmlFor="Vue js">Vue js</label>
            {errors.skills && (
              <span htmlFor="" style={{ color: `var(--danger)` }}>
                *** Make Sure you Checked The Value
              </span>
            )}
          </div> */}
        
