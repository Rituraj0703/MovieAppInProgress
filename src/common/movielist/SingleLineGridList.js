import React, { useEffect , useState} from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/styles';
import { install } from '@material-ui/styles';
import tileData from './tileData';


const useStyles = makeStyles({
  root: {
    //display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: "blue"
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: "blue"
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
});


 export default function SingleLineGridList() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={6}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.poster_url} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}