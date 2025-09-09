import { Box, Grid } from "@mui/material";
import ActivityCard from "./ActivityCard";

type Props = {
  activities: Activity[];
  selectActivity: (id: string) => void;
};

export default function ActivityList({ activities, selectActivity }: Props) {
  return (
    <Grid container spacing={2}>
      {activities.map((activity) => (
        <Grid item xs={12} sm={6} md={6} lg={6} key={activity.id}>
          <Box
            display="flex"
            flexDirection="column"
            height="400px" // Chiều cao cố định
            sx={{
              justifyContent: "space-between",
              borderRadius: 2,
              boxShadow: 2,
              bgcolor: "background.paper",
              p: 2,
            }}
          >
            <ActivityCard activity={activity} selectActivity={selectActivity} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
