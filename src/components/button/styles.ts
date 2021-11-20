// import { styled } from "@material-ui/core";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

export const PurpleButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 18,
  marginTop: 15,
  borderRadius: 10,
  padding: '6px 12px',
  border: '1px solid',
  paddingTop: 20,
  paddingBottom: 20,
  paddingLeft: 40,
  paddingRight: 40,
  lineHeight: 1.5,
  backgroundColor: '#662275',
  '&:hover': {
    backgroundColor: '#A527C2',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#662275',
  }
});