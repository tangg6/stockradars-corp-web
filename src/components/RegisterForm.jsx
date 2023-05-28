import React from "react";
import { useTheme } from '@mui/material/styles';
import { TextField, Button } from "@mui/material";


const RegisterForm = ({
  data,
  handleFormSubmit,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setEmail,
  setRef,
}) => {
  
    const theme = useTheme();


  return (
    <div className="container mx-auto">
      <form onSubmit={handleFormSubmit} className="register-form">
        <TextField
          label="ชื่อ"
          value={data.firstName}
          onChange={(e) => setFirstName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="นามสกุล"
          value={data.lastName}
          onChange={(e) => setLastName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="เบอร์โทรศัพท์"
          value={data.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="อีเมล"
          value={data.email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ref"
          value={data.ref}
          onChange={(e) => setRef(e.target.value)}
          fullWidth
          margin="normal"
        />
        <div className="flex justify-end p-2">
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            สมัคร
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
