import React from "react";
import classes from "./styles.module.css";

const ArtistItem = (props) => {
  const { name, image } = props;
  return (
    <div className={classes.artistItem}>
      <img src={image}></img>
      <p className={classes.name}>{name}</p>
    </div>
  );
};

export default ArtistItem;
