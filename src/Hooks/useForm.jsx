import React, { useState } from 'react'

export const useForm = () => {

    const [fields,setFields] = useState({
    username: "",
    email: "",
    country: "",
    gender: "",
    dob : new Date().toISOString().split('T')[0],
    skills: [],
    })
    const [errors,setErrors] = useState({
    username: false,
    email: false,
    country: false,
    gender: false,
    dob: false,
    skills:false
    })

    const customValidate = (event,name,value)=>{
        debugger
        // console.log('== onchange custom validate');       
        console.log(name,value);

        if (value.trim()==="") {
          let errs = false
          if (name=='username' ) {errs = true; }
          if (name=='email' && value === "" || !/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value))
           {errs = true; }
           if (name=='country') {errs = true; }
          if (name=='gender'&& value === "") {errs = true; }
          if(name=='dob') {errs = true; }
          if (name=='skills' && skills.length==0) { errs=true; }
          setErrors(prev=> ({
            ...prev,
            [name]: errs
          }))
        }else{
          console.log('validate else case');
        }
      }


    const handleChange = (event)=> {
      debugger
      const { name, value, } = event.target;
      console.log('==hancleChange',name,value);
        event.persist();
        customValidate(event,name,value)
        setFields((prev) => ({
            ...prev,
            [name]: value,
          }));
    };

    
    const onBlur =(event)=> {
      // debugger
      const {name,value} = event.target
      event.persist();
      customValidate(event,name,value)
    };

    const handleCheckBox = (event) => {
      // console.log('hancleCheckbox');
      // debugger
      const { name, value, checked } = event.target;
        // console.log(name==skills && skills.length);
      // console.log(name,value,checked);
      let newSkills = [...fields.skills];
      
      if (checked) newSkills.push(value);
      else newSkills = newSkills.filter((itm) => itm !== value);
      setFields((prev) => ({
        ...prev,
        [name]: newSkills,
      }));
      console.log(name, value, checked, fields.skills);
      // customValidate(event,name,value)
    };
    const subFormValidate = ()=> {
      debugger
      const errs = {
            username: false,
            email: false,
            gender: false,
            country: false,
            skills : false,
            dob: false
          };
        
          if (fields.username === "") errs.name = true;
          if (fields.email === "") errs.email = true;
          if (fields.gender === "") errs.gender = true;
          if (fields.country === "") errs.country = true;
          if(fields.dob === "") errs.dob = true;
          if (fields.skills.length===0)errs.skills = true
      
          setErrors(errs);
    }

    const handleSubmit= (event)=> {
      debugger
      const { name, value } = event.target;
      console.log('custom handle submit',name,value);
      event.preventDefault()
      if (Object.keys(errors).length==0 && Object.keys(fields).length!==0) {
        alert('validation success',Object.keys(errors).length , Object.keys(fields).length)
      }else {
        subFormValidate()
        // customValidate(event,name)
        alert('.......... something went wrong')
        customValidate(event,name,value)
      }
    }

  return {
    fields,
    errors,
    handleChange,
    handleCheckBox,
    handleSubmit,
    onBlur
  }
}
