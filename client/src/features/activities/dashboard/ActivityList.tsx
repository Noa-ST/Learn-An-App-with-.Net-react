import { Box, Grid, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityList() {
  const { activities, isPending } = useActivities();

  if (!activities || isPending) return <Typography>Loading...</Typography>;
  return (
    <Grid container spacing={2}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={activity.id}>
          <Box
            display="flex"
            flexDirection="column"
            height="400px"
            sx={{
              justifyContent: "space-between",
              borderRadius: 2,
              boxShadow: 2,
              bgcolor: "background.paper",
              p: 2,
            }}
          >
            <ActivityCard activity={activity} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
