import * as React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import services from '../services/foods'

export default function GenerateButton({ numFoods }) {

  const handleClick = () => {
    const result = services.getFood(numFoods)
    console.log(result)
  }

  return (
    <Button variant="contained" endIcon={<SendIcon />} onClick={handleClick}>
        generate
    </Button>
  );
}