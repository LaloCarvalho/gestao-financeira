import React, { useState } from "react";
import * as S from "./styles";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import TextBox from "../../textBox";

interface ExpenseProps{
  isOpen: boolean;
  close: () => void;
}

const Expense: React.FC<ExpenseProps> = ({isOpen, close}: ExpenseProps) => {
  const [expenseValue, setExpenseValue] = useState<string>("");

  const styleNewExpense = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 3,
  };

  return (
      <Modal
        open={isOpen}
        onClose={close}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <Box sx={styleNewExpense}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Nova Despesa
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <TextBox
                width={350}
                id="outlined-basic-name"
                label="Valor"
                value={expenseValue}
                onChange={(event: any) => setExpenseValue(event.target.value)}
              ></TextBox>
              <TextBox
                width={350}
                id="outlined-basic-name"
                label="Descrição"
                value={expenseValue}
                onChange={(event: any) => setExpenseValue(event.target.value)}
              ></TextBox>
            </Typography>
          </Box>
        </Fade>
      </Modal>
  );
};

export default Expense;
