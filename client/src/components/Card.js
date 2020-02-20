import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { aqiToCig, hazardLevels, monthToMonth } from '../constants';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '0 20px'
  },
  media: {
    height: 140
  }
});

export default function MediaCard({
  date,
  aqi,
  cityUrl,
  mainPoll,
  value,
  remove,
  weather
}) {
  const classes = useStyles();
  const formattedCity = value.stats.id.split('-').join(', ');
  const formattedDate =
    monthToMonth[date.slice(5, 7)] +
    ' ' +
    date.slice(8, 10) +
    `, ${date.slice(0, 4)}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={cityUrl} title={cityUrl} />
        <CardContent className="card-actions">
          <Typography gutterBottom variant="h5" component="h2">
            {formattedCity} <br></br>
            <span id="date">{formattedDate}</span>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <h3 style={{ margin: 0, color: 'black' }}>AQI: {aqi}</h3>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <p
              style={{
                color: 'black',
                marginTop: '0.5rem',
                marginBottom: '0.2rem'
              }}
            >
              Main Pollutant: {mainPoll}
            </p>
          </Typography>
          <Typography>
            Cigarettes per day: {(aqi * aqiToCig).toPrecision(2)} <br></br>
            <p style={{ marginTop: '0.5rem' }}>
              Hazard level:{' '}
              <span
                style={{
                  color: `${
                    hazardLevels.find(({ level }) => aqi <= level.range).level
                      .color
                  }`
                }}
              >
                {
                  hazardLevels.find(({ level }) => aqi <= level.range).level
                    .hazard
                }
              </span>
            </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
        <Button className="card-actions" onClick={() => remove(value)}>
          Remove
        </Button>
        <Link
          to={{
            pathname: `/city/${value.stats.id.split('-')[0]}`,
            state: {
              date,
              aqi,
              cityUrl,
              mainPoll,
              value,
              formattedCity,
              formattedDate,
              weather
            }
          }}
        >
          <Button className="card-actions">Details</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
