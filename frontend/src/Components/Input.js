import React from "react";
import { AiFillDelete } from "react-icons/ai";
import {TextField,IconButton,Stack} from '@mui/material';
export default function Input({ objValue, onChange, index ,deleteField}) {
  const { label, type, value } = objValue;
  return (
    <div className="input-group">
      <div className="input">
        <Stack fullWidth>
        <TextField
          id="outlined-basic"
          label={label}
          defaultValue="Small"
          margin="dense"
          variant="outlined"
          type={type || "text"}
          value={value || ""}
          onChange={(e) => onChange(e, index)}
        />
        <IconButton 
          onClick={(e) => deleteField(e, index)} 
          aria-label="delete" 
          size="large">
            <AiFillDelete size={30} />
        </IconButton>
        </Stack>
      </div>
    </div>
  );
}
