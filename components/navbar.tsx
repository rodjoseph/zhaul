import {
    AppBar,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Link as MuiLink,
    Button,
    Avatar
  } from "@material-ui/core";
  import { AccountCircle, Menu as MenuIcon } from "@material-ui/icons";
  import Link from "next/link";
  import * as React from "react";
  import { Auth } from "@supabase/ui";
  
  export default function Navbar() {
    const { user } = Auth.useUser();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
      <AppBar position="sticky" variant="outlined" elevation={0}>
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Z-Haul
          </Typography>
          <Link href="/about" passHref>
            {/* <IconButton>
              <InfoIcon />
            </IconButton> */}
            <Button color="inherit">
              About
            </Button>
          </Link>
          {user ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar sizes="sm" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link href="/profile" passHref>
                  <MenuItem>Profile</MenuItem>
                </Link>
                <Link href="/account" passHref>
                  <MenuItem>My account</MenuItem>
                </Link>
              </Menu>
            </div>
          ) : (
            <>
              <Link href="/login" passHref><Button color="inherit" variant="outlined">Login</Button></Link>
              <Link href="/signup" passHref><Button color="inherit" variant="outlined">Signup</Button></Link> 
            </>
          )}
        </Toolbar>
      </AppBar>
    );
  }