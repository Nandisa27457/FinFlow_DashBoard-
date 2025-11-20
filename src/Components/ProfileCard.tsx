import { Card, CardContent, Typography } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
export default function SidebarProfileCard() {
  return (
    <Card 
      sx={{
        mt: "auto", 
        mb:1,
        boxShadow:2,
        background: "hsla(32, 24%, 55%, 0.22)",
        borderRadius: 2,
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 0 }}>
        <div>
            <AccountCircleOutlinedIcon/>
          <Typography variant="subtitle1" fontWeight={400}>
            John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Johndoe@gmail.com
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
