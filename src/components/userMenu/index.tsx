import React, { useState } from "react";
import * as S from "./styles";
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import photo from "./assets/photo.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "./assets/logo.png";
import Link from '@material-ui/core/Link';
import { useNavigate, useRoutes } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const UserMenu: React.FC = ({ children }) => {
  const theme = useTheme();
  //const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("Eduardo Diogenes");
  const [teste, setTeste] = useState<string>("");

  const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
  const openUserProfile = Boolean(anchor);
  const storedOpen = localStorage.getItem('drawerOpen') === "true";
  const [open, setOpen] = React.useState(storedOpen);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };
  const handleClose = () => {
    setAnchor(null);
  };

  const handleDrawerOpen = () => {
    if (!open) {
      setOpen(true);
      localStorage.setItem('drawerOpen', "true");
    } else {
      setOpen(false);
      localStorage.setItem('drawerOpen', "false");
    }
 };

  const handleUserMenuOpen = () => {
    handleDrawerOpen();
    //setOpen(true);
  };

  const handleUserMenuClose = () => {
    handleDrawerOpen();
    //setOpen(false);
  };

const itemsList = [
  {
    text: "Transações",
    icon: <ReceiptLongOutlinedIcon />,
    href: "/"
  },
  {
    text: "Receitas",
    icon: <MovingOutlinedIcon />,
    href: "/signIn"
  },
  {
    text: "Despesas",
    icon: <TrendingDownOutlinedIcon />
  },
  {
    text: "Cartões de Crédito",
    icon: <CreditCardOutlinedIcon />,
    href: "/credicardRegister"
  },
  {
    text: "Relatórios",
    icon: <AssessmentOutlinedIcon />
  },
]

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={S.navbar} position="fixed" open={open}>
        <div>
          {/* <Toolbar> */}
          <S.DivLeftNavbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleUserMenuOpen}
              edge="start"
              sx={{
                marginRight: '36px',
                color: '#985dc5',
                ...(open && { display: 'none' }),
              }}
            >
              <ArrowForwardIosOutlinedIcon />
            </IconButton>

          </S.DivLeftNavbar>



          <S.DivRightNavbar>
            <Button
              aria-controls={openUserProfile ? 'demo-positioned-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={openUserProfile ? 'true' : undefined}
              onClick={handleClick}
            >
              <S.navbarInfo>
                <S.Img src={photo} alt="User Photo" /> {user}
                <ArrowDropDownOutlinedIcon />
              </S.navbarInfo>
            </Button>
            <Menu
              aria-labelledby="demo-positioned-button"
              anchorEl={anchor}
              open={openUserProfile}
              onClose={handleClose}
              PaperProps={{
                style: {
                  width: 225,
                },
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <MenuItem style={S.menuItens} onClick={handleClose}><AccountBoxOutlinedIcon style={S.menuItensIcons} />&nbsp;Meu Perfil</MenuItem>
              <MenuItem style={S.menuItens} onClick={handleClose}><SettingsOutlinedIcon style={S.menuItensIcons} />&nbsp;Configurações</MenuItem>
              <Divider />
              <MenuItem style={S.menuItens} onClick={handleClose}><ExitToAppOutlinedIcon style={S.menuItensIcons} />&nbsp;Sair</MenuItem>
            </Menu>
          </S.DivRightNavbar>
        </div>
        {/* </Toolbar> */}
      </AppBar>







      <Drawer variant="permanent" anchor="left" open={open}>
        {/* <DrawerHeader> */}
        <S.DivLogo>
          <S.ImgLogo
            alt=""
            src={logo}
            width="50"
            height="50"
          />
          Entrada Direta
          <S.DivIconMenu>
            <IconButton onClick={handleUserMenuClose}>
              <ArrowBackIosOutlinedIcon />
            </IconButton>
          </S.DivIconMenu>
        </S.DivLogo>
        {/* </DrawerHeader> */}
        <Divider />
        <S.DivOptionsMenu>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, href } = item;
            return (
            <ListItem style={S.Drawerlist} button component={Link} key={text} href={href}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
            <ListItemText primary={text} />
            </ListItem>

            );
          })}
        </List>
        
        </S.DivOptionsMenu>
        <Divider />
        <S.DivOptionsMenu>
          <List>
            {['Configurações'].map((text, index) => (
              <ListItem 
                button 
                key={text}
                component="a" 
                href="/signIn"
              >
                <ListItemIcon>
                  {index === 0 ? <SettingsOutlinedIcon /> : ""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </S.DivOptionsMenu>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#f5f6fc" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default UserMenu;
