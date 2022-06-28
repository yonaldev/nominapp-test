import { Card, CardMedia, CardContent, Typography } from "@mui/material";

type Props = {
  item: {
    name: string;
    img: string;
    description?: string;
  };
};

export const CardItem: React.FC<Props> = ({ item }) => {
  return (
    <Card sx={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="194"
        image={item?.img}
        alt="Image de pokemon"
      />
      <CardContent>
        <Typography component="h2">{item.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          {item?.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
