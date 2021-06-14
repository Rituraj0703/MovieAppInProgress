import React from 'react';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { makeStyles } from '@material-ui/styles';
import { install } from '@material-ui/styles';
//import Layer_1 from '../../assets/logo.svg';
import tileData from './tileData';
import './SingleLineGridList.css';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: "blue"
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
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

// const tileData = [
//   {
//     img: {Layer_1},
//     title: 'Breakfast',
//     author: 'jill111',
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: {Layer_1},
//     title: 'Tasty burger',
//     author: 'director90',
//   },
//   {
//     img: {Layer_1},
//     title: 'Camera',
//     author: 'Danson67',
//   },
//   {
//     img: {Layer_1},
//     title: 'Morning',
//     author: 'fancycrave1',
//     featured: true,
//   },
  
// ];
export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
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