import { AppBar, Toolbar } from "@mui/material";
import Logo from "./shared/Logo";
import { useAuth } from "../context/AuthContext";
import  NaviLink  from "./shared/NaviLink";

const Header = () => {
  const auth = useAuth();
  return (
    <AppBar
      sx={{ bgcolor: "transparent", position: "static", boxShadow: "none" }}
    >
      <Toolbar sx={{ display: "flex" }}>
        <Logo />
        <div>
          {auth?.isLoggedIn ? (
            <>
              <NaviLink
                bg="#00fffc"
                to="/chat"
                text="Go To Chat"
                textColor="black"
              />
              <NaviLink
                bg="#51538f"
                to="/"
                text="Log Out"
                textColor="white"
                onClick={auth.logout}
              />
            </>
          ) : (
            <><NaviLink
            bg="#00fffc"
            to="/login"
            text="Login"
            textColor="black"
          />
          <NaviLink
            bg="#51538f"
            to="/signup"
            text="Sign Up"
            textColor="white"
          /></>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
