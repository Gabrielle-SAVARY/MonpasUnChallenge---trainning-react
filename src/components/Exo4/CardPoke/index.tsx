import { useEffect, useState } from 'react';

import './styles.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// API pokemon : https://pokebuildapi.fr/api/v1
// API limité à 10 pokemon: api/v1/pokemon/limit/10

interface CardProps {
  pokemon: {
    name: string
    image: string
  }
}

function CardPoke({ pokemon }: CardProps) {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={pokemon.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Voici le pokemon:
            {' '}
            {pokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardPoke;
