
import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import NewTileData from './NewTileData';
import { makeStyles } from '@material-ui/styles';



const useStyles = makeStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      //justifyContent:'center',
      overflow: 'hidden',
      backgroundColor: "blue"
      
    },
    gridList: {
    //flexWrap: 'nowrap',
      width: 1280,
    height: 450,
    transform: 'translateZ(0)',
    },
    
  });

export default function NewReleases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} cellWidth={900} className={classes.gridList} cols={2} rows={3}>
        {NewTileData.map((tile) => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}