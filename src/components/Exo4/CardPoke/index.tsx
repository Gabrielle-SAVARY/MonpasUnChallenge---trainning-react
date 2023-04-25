import { useEffect, useState } from 'react';

import './styles.scss';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

// API pokemon : https://pokebuildapi.fr/api/v1
// API limité à 10 pokemon: api/v1/pokemon/limit/10

interface ApiTypesProps {
  name: string
  image: string
}

interface CardProps {
  pokemon: {
    /*     id: number */
    name: string
    image: string
    apiTypes: ApiTypesProps[]
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

          <Typography className="pokeTypes">
            {pokemon.apiTypes.map((type) => (
              <span key={type.image} className="pokeType">
                <span>{type.name}</span>
                <img src={type.image} alt={type.name} className="imgType" />
              </span>
            ))}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardPoke;
