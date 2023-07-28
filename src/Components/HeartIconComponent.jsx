import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const HeartIconComponent = () => {
  const [isFilled, setIsFilled] = useState(false);

  const handleIconClick = () => {
    setIsFilled(!isFilled);
  };

  return (
    <div>
      <div onClick={handleIconClick}>
        {isFilled ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </div>
    </div>
  );
};

export default HeartIconComponent;
