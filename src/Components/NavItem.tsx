import { Button, type SvgIconTypeMap } from "@mui/material";
import { Link } from "react-router";

export type NavtItemProps = {
    icon: React.ReactElement;
    title: string;
    path: string;
    isActive?: boolean /* we will use this to determine which item is active currently*/
};

const NavItem = ({ icon, path, title }: NavtItemProps) => {
    return (
        <Button
            component={Link}
            to={path}
            startIcon={icon}
            sx={{
                // Todo: move this stuff to be part of css
                color: "black",
                justifyContent: "flex-start",
                textTransform: "none",
                textDecoration: "none",
                width: "100%",
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
