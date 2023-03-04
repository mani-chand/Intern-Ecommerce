import { useState, useRef } from "react";
import DrawerAppBar from './../Components/Navbar.js'
import {Button,Typography,InputLabel,FormControl,Select,Stack,MenuItem} from '@mui/material';
import Input from "../Components/Input.js";
function Electronic() {
const [formValues, setFormValues] = useState([
    {
        label:"Name",
        type:"text",
        value:"",
    },
    {
        label:"Phone",
        type:"number",
        value:"",
    },
    {
        label:"DateofBirth",
        type:"date",
        value:"",
    }
]);
const [toggle, setToggle] = useState(false);

const inputRef = useRef();
const selectRef = useRef();

const handleChange = (e, index) => {
    const values = [...formValues];
    values[index].value = e.target.value;
    setFormValues(values);
    console.log(values)
};

const handleSubmit = async() =>{
    console.log(formValues)
    try {
        const res = await fetch('http://localhost:5000/AddElectronicCustomer',{
            method:"POST",
            data:formValues
        })
        console.log(res.data)
    } catch (error) {
        console.log("error")
    }
}

const handleDeleteField = (e, index) => {
    const values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
};

const handleAddField = (e) => {
    e.preventDefault();
    const values = [...formValues];
    values.push({
    label: inputRef.current.value || "label",
    type: selectRef.current.value || "text",
    value: "",
    });
    setFormValues(values);
    setToggle(false);
};

const addBtnClick = (e) => {
    e.preventDefault();
    setToggle(true);
};


return (
    <div className="App">
        <DrawerAppBar/>
    <div>
    <Stack spacing={4}>

    <Typography align="center" variant="h3" component="h3">
        ADD Customers
    </Typography>
    {formValues.map((obj, index) => (
        <Input
            key={index}
            objValue={obj}
            onChange={handleChange}
            index={index}
            deleteField={handleDeleteField}
        />
        ))}
        {!toggle ? (
        <div className="center">
            <Button fullWidth variant="contained" color="success" onClick={addBtnClick}>
            Add New Felid
            </Button>
        </div>
        ) : (
            <div className="dialog-box">
            <Stack>
                <input 
                id="outlined-basic"
                label={formValues.label}
                variant="outlined"
                placeholder="Field"
                style={{height:"50px"}}
                type="text"
                ref={inputRef} />
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-filled-label">Type</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Type"
                value={formValues.type}
                ref={selectRef}>
                <MenuItem value="text">Text</MenuItem>
                <MenuItem value="number">Number</MenuItem>
                <MenuItem value="email">Email</MenuItem>
                <MenuItem value="password">Password</MenuItem>
                </Select>
                </FormControl>
                <Button variant="contained" size="medium" onClick={handleAddField}>
                Add
                </Button>
            </Stack>
        </div>
        )}
        <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" size="medium"  className="submit-btn">
        Submit 
        </Button>
        </Stack>
    </div>
    </div>
);
}
export default Electronic;
