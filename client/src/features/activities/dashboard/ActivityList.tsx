import { Box, Grid, Typography } from "@mui/material";
import ActivityCard from "./ActivityCard";
import { useActivities } from "../../../lib/hooks/useActivities";

export default function ActivityList() {
  const { activities, isPending } = useActivities();

  if (!activities || isPending) return <Typography>Loading...</Typography>;
  return (
    <Grid container spacing={3}>
      {activities.map((activity) => (
        <Grid item xs={12} key={activity.id}>
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              bgcolor: "background.paper",
              p: 2,
              minHeight: 180,
              height: "100%",
            }}
          >
            <ActivityCard activity={activity} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
