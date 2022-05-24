import React, { useContext, useEffect, useState } from "react";
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
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import MovingOutlinedIcon from '@mui/icons-material/MovingOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import AddIcon from '@mui/icons-material/Add';
import photo from "./assets/photo.png";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from "./assets/logo.png";
import Link from '@material-ui/core/Link';
import { SecurityContext, ServicesContext } from "../../hooks";
import { Logout } from "@mui/icons-material";
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Backdrop from '@mui/material/Backdrop';
import TextBox from "../../components/textBox";
import Income from "./income";
import Expense from "./expense";

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
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const storedOpen = localStorage.getItem('drawerOpen') === "true";
  const [open, setOpen] = useState(storedOpen);
  const openUserProfile = Boolean(anchor);
  const { User, SetUser } = useContext(SecurityContext);
  const { api } = useContext(ServicesContext);
  const [openButtonNew, setOpenButtonNew] = React.useState(false);
  const [openIncomeModal, setOpenIncomeModal] = React.useState(false);
  const [openExpenseModal, setOpenExpenseModal] = React.useState(false);
  const [incomeValue, setIncomeValue] = useState<string>("");

  const styleButtonNew = {
    position: 'absolute' as 'absolute',
    top: '17%',
    left: open ? '22%' : '13%',
    transform: 'translate(-50%, -50%)',
    width: 250,
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: 24,
    p: 0,
  };

  useEffect(() => {
  }, []);

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
  };

  const handleUserMenuClose = () => {
    handleDrawerOpen();
  };

  const itemsList = [
    {
      text: "Início",
      icon: <HomeOutlinedIcon />,
      href: "/userHome"
    },
    {
      text: "Contas de Banco",
      icon: <AccountBalanceOutlinedIcon />,
      href: "/accounts"
    },
    {
      text: "Cartões de Crédito",
      icon: <CreditCardOutlinedIcon />,
      href: "/credicardRegister"
    },
    {
      text: "Relatórios",
      icon: <AssessmentOutlinedIcon />,
      href: "/report"
    },
  ]

  const itemsList2 = [
    {
      text: "Configurações",
      icon: <SettingsOutlinedIcon />,
      href: "/settings"
    },
  ]

  const LogOut = () => {
    SetUser(undefined);
  };

  const Profile = () => {
    Teste();
  };

  const Settings = () => {

  };

  const Teste = () => {
    try {
      api.user.getTeste(
        api,
      )
        .then((result: any) => {
          console.log(result.data);
        })
        .catch((error: any) => {
          console.log(error.result)
        })
        .finally(() => {
        });

    } catch (e: any) {
      console.log(e.message)
    }
  }

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
              <S.NavbarInfo>
                <S.Img src={photo} alt="User Photo" />
                <S.Elipsis>{User?.name}</S.Elipsis>
                <ArrowDropDownOutlinedIcon />
              </S.NavbarInfo>
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
              <MenuItem style={S.menuItens} onClick={Profile} component={Link} ><AccountBoxOutlinedIcon style={S.menuItensIcons} />&nbsp;Meu Perfil</MenuItem>
              <MenuItem style={S.menuItens} onClick={Settings} component={Link} href="/userSettings"><SettingsOutlinedIcon style={S.menuItensIcons} />&nbsp;Configurações</MenuItem>
              <Divider />
              <MenuItem style={S.menuItens} onClick={LogOut} component={Link} href="/signIn"><ExitToAppOutlinedIcon style={S.menuItensIcons} />&nbsp;Sair</MenuItem>
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
            <S.DivNew>
              <S.Button onClick={() => {setOpenButtonNew(true)}}>
                <AddIcon /> {open ? "Novo" : ""}
              </S.Button>
              <Modal
                open={openButtonNew}
                onClose={() => {setOpenButtonNew(false)}}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openButtonNew}>
                  <Box sx={styleButtonNew}>
                    <ListItem style={S.Drawerlist} button component={Link} onClick={() => { setOpenButtonNew(false); setOpenIncomeModal(true) }}>
                      {<ListItemIcon style={S.DrawerlistIcon}><MovingOutlinedIcon /></ListItemIcon>}
                      <ListItemText primary={"Receita"} />
                    </ListItem>

                    <ListItem style={S.Drawerlist} button component={Link} onClick={() => { setOpenButtonNew(false); setOpenExpenseModal(true) }}>
                      {<ListItemIcon style={S.DrawerlistIcon}><TrendingDownOutlinedIcon /></ListItemIcon>}
                      <ListItemText primary={"Despesa"} />
                    </ListItem>
                  </Box>
                </Fade>
              </Modal>
              <Income isOpen={openIncomeModal} close={() => { setOpenIncomeModal(false)}}></Income>
              <Expense isOpen={openExpenseModal} close={() => { setOpenExpenseModal(false)}}></Expense>
            </S.DivNew>
          </List>
          <List>
            {itemsList.map((item, index) => {
              const { text, icon, href } = item;
              return (
                <ListItem style={S.Drawerlist} button component={Link} key={text} href={href}>
                  {icon && <ListItemIcon style={S.DrawerlistIcon}>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>

              );
            })}
          </List>

        </S.DivOptionsMenu>
        <Divider />
        <S.DivOptionsMenu>
          <List>
            {itemsList2.map((item, index) => {
              const { text, icon, href } = item;
              return (
                <ListItem style={S.Drawerlist} button component={Link} key={text} href={href}>
                  {icon && <ListItemIcon style={S.DrawerlistIcon}>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>

              );
            })}
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
