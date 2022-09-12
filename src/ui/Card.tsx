import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ContentMedia {
  url: string;
  alt: string;
}

export interface CardProps {
  contentMedia: ContentMedia;
  description: string;
  title: string;
  callToActionMsg: string;
}

function CardWrapper({
  contentMedia,
  description,
  title,
  callToActionMsg,
}: CardProps) {
  return (
    <Card sx={{ maxWidth: 345, alignSelf: 'center', justifySelf: 'center' }}>
      <CardMedia
        component="img"
        alt={contentMedia.alt}
        height="140"
        image={contentMedia.url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{callToActionMsg}</Button>
      </CardActions>
    </Card>
  );
}

export default CardWrapper;
