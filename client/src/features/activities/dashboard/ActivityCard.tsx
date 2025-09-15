import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Typography,
} from "@mui/material";
import { useActivities } from "../../../lib/hooks/useActivities";
import { Link } from "react-router";

type Props = {
  activity: Activity;
};

export default function ActivityCard({ activity }: Props) {
  const { deleteActivity } = useActivities();
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        borderRadius: 2,
        padding: 2,
      }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{activity.title}</Typography>
        <Typography sx={{ color: "text.secondary", mb: 1 }}>
          {new Date(activity.date).toLocaleString()}
        </Typography>
        <Typography variant="body2">{activity.description}</Typography>
        <Typography variant="subtitle2" sx={{ mb: 1 }}>
          {activity.city} / {activity.venue}
        </Typography>
        <Chip label={activity.category} variant="outlined" sx={{ mb: 2 }} />
      </CardContent>

      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Button
          component={Link}
          to={`/activities/${activity.id}`}
          size="small"
          variant="contained"
          sx={{ textTransform: "none" }}
        >
          View
        </Button>
        <Button
          onClick={() => deleteActivity.mutate(activity.id)}
          disabled={deleteActivity.isPending}
          color="error"
          size="small"
          variant="contained"
          sx={{ textTransform: "none", ml: 2 }}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
