import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { fetchData } from "./DataComponent";
import ModalComponent from "./ModalComponent";
import InfoButton from "./InfoButton";

import HeartIconComponent from "./HeartIconComponent";

const GalleryComponent = () => {

  const [openDialog, setOpenDialog] = useState(false);
  const [data, setData] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    // Fetch the data when the component mounts
    fetchData()
      .then((result) => setData(result))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleOpenDialog = (item) => {
    setSelectedItems([...selectedItems, item]);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItems([]);
  };

  return (
    <>
      <ImageList cols={4}>
        {data.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              position="top"
              actionIcon={
                <InfoButton onClick={() => handleOpenDialog(item)} />
              }
              actionPosition="right"
            />
            <ImageListItemBar
              sx={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
                  "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
              }}
              title={item.title}
              position="bottom"
              actionIcon={
                <IconButton
                  sx={{ color: "white" }}
                  aria-label={`star ${item.title}`}
                >
                  <HeartIconComponent/>
                </IconButton>
              }
              actionPosition="right"
            />
          </ImageListItem>
        ))}
      </ImageList>
      
      {/* CALLING MODAL */}
      {selectedItems.map((selectedItem) => (
        <ModalComponent
          key={selectedItem.id}
          open={true} // Open the dialog for the selected item
          onClose={handleCloseDialog}
          title={selectedItem.title}
          content={selectedItem.description}
          // Any other data from the "selectedItem" can be passed to the dialog here
        />
      ))}

    </>
  );
};

export default GalleryComponent;
