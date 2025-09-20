import { Divider, Paper, Typography } from "@mui/material";
import { useLocation } from "react-router";

export default function ServerError() {
  const { state } = useLocation();
  return (
    <Paper>
      {state?.error ? (
        <>
          <Typography
            variant="h3"
            color="error"
            gutterBottom
            sx={{ px: 4, pt: 2 }}
          >
            {state.error.message || "Server Error"}
          </Typography>
          <Divider />
          <Typography variant="body1" sx={{ px: 4, py: 2 }}>
            {state.error.details || "Internal server error"}
          </Typography>
        </>
      ) : (
        <Typography variant="h5" color="error" sx={{ px: 4, py: 2 }}>
          Server error - check the terminal for more info!
        </Typography>
      )}
    </Paper>
  );
}
