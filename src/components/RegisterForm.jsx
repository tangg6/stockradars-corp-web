import React from 'react';
import { TextField, Button } from '@mui/material';

const RegisterForm = ({ data, handleFormSubmit, setFirstName, setLastName, setPhoneNumber, setEmail, setRef }) => {
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
        <Button type="submit" variant="contained" color="primary" className="flex justify-end">
          สมัคร
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
