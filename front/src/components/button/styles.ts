// import { styled } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

export const PurpleButton = styled(Button)({
  textTransform: 'none',
  fontSize: 18,
  borderRadius: 20,
  outline: 'none',
	border: 'none',
  background: "linear-gradient(-30deg,#3b02ed,#8e2ae0 55%)",
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 40,
  paddingRight: 40,
  lineHeight: 1.5,
  //backgroundColor: '#662275',  
  '&:hover': {
    transform: "scale(1.1)",
  }
});