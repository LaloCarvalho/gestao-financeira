import React, { useState } from "react";
import * as S from "./styles";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import TextBox from "../../textBox";
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'

interface IncomeProps{
  isOpen: boolean;
  close: () => void;
}

const Income: React.FC<IncomeProps> = ({isOpen, close}: IncomeProps) => {
  const [incomeValue, setIncomeValue] = useState<string>("");

  const styleNewIncome = {
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
          <Box sx={styleNewIncome}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Nova Receita
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <TextBox
                width={350}
                id="outlined-basic-name"
                label="Valor"
                value={incomeValue}
                onChange={(event: any) => setIncomeValue(event.target.value)}
              ></TextBox>
              <TextBox
                width={350}
                id="outlined-basic-name"
                label="Descrição"
                value={incomeValue}
                onChange={(event: any) => setIncomeValue(event.target.value)}
              ></TextBox>
            </Typography>
          </Box>
        </Fade>
      </Modal>
  );
};

export default Income;
