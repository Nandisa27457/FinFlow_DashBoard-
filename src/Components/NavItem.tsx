import { Button } from "@mui/material";
import { Link } from "react-router";

const NavItem = ({ icon, path, title }: any) => {
    console.log("Testing: ", { icon, path, title });
    return (
        <Button
            component={Link}
            to={path}
            startIcon={icon}
            sx={{
                color: "black",
                justifyContent: "flex-start",
                textTransform: "none",
                textDecoration: "none",
                width: "100%",
                // padding: "10px 20px",
                borderRadius: "12px",
                "&:hover": {
                    backgroundColor: "#996b3f5e",
                    textDecoration: "none",
                },
            }}>
            {title}
        </Button>
    );
};

export default NavItem;
