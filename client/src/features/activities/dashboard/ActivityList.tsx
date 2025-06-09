import { Box, Grid } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
};

export default function ActivityList({
  activities,
  selectActivity,
  deleteActivity,
}: Props) {
  return (
    <Grid container spacing={3} alignItems="stretch">
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={activity.id}>
          <Box display="flex" flexDirection="column" height="100%">
            <ActivityCard
              activity={activity}
              selectActivity={selectActivity}
              deleteActivity={deleteActivity}
            />
          </Box>
        </Grid>
      ))}
    </Grid>

    // <Box sx={{ display: "flex", flexDirection: "colum", gap: 3 }}>
    //   {activities.map((activity) => (
    //     <ActivityCard
    //       key={activity.id}
    //       activity={activity}
    //       selectActivity={selectActivity}
    //     />
    //   ))}
    // </Box>
  );
}
