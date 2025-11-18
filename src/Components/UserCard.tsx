// import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const UserCard = () => {
    return (
        <>
            <span className="user-container">
                <AccountCircleOutlinedIcon />
                <p className="Username">Jane Doe</p>
            </span>
            <p className="email">jane.doe@finflow.com</p>
        </>
    );
};

export default UserCard;
