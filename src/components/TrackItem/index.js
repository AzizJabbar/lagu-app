import React from "react";
import classes from "./styles.module.css";

const TrackItem = (props) => {
  const { title, artist, image } = props;
  return (
    <div className={classes.trackItem}>
      <img src={image}></img>
      <div className={classes.title}>{title}</div>
      <div className={classes.artist}>{artist}</div>
    </div>
  );
};

export default TrackItem;
