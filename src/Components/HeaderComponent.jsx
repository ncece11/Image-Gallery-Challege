import React from "react";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const HeaderComponent = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 250, height: 250 }} disabled>
            <img
              src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ba6eb16e-7880-45c2-8b26-10db799d9085/d8b80js-2dfedb77-dcb9-42c2-b1c9-241d0bc91866.png/v1/fill/w_300,h_300/studio_ghibli_logo_pixel_art_by_beausaur_d8b80js-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwIiwicGF0aCI6IlwvZlwvYmE2ZWIxNmUtNzg4MC00NWMyLThiMjYtMTBkYjc5OWQ5MDg1XC9kOGI4MGpzLTJkZmVkYjc3LWRjYjktNDJjMi1iMWM5LTI0MWQwYmM5MTg2Ni5wbmciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.PvBO7xf9sCgTfSQOqEAGgCrZKlxvJra0-Omxj0ym5Ps"
              alt="ghibli"
              width={320}
            />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column">
            <Grid>
              <Typography>
                <h1>STUDIO GHIBLI (スタジオジブリ)</h1>
              </Typography>
              <Typography variant="body2" gutterBottom>
                <i>Movie Gallery</i>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <p>
                  Studio Ghibli, Inc. is a Japanese animation studio based in
                  Koganei, Tokyo. It has a strong presence in the animation
                  industry and has expanded its portfolio to include various
                  media formats, such as short subjects, television commercials,
                  and two television films.
                  <br />
                  <br />
                  The name "Ghibli" was chosen by Miyazaki from the Italian noun
                  ghibli (also used in English), based on the Libyan Arabic name
                  for hot desert wind (ghiblī), and the namesake of an
                  Italian aircraft, the Caproni Ca.309. The name was chosen by
                  Miyazaki due to his passion for aviation and also for the idea
                  that the studio would "blow a new wind through the anime
                  industry".Although the Italian word would be more
                  accurately transcribed as "Giburi" (ギブリ), with a hard g
                  sound, the studio's name is written in Japanese as Jiburi
                  ジブリ.
                </p>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <hr />
    </>
  );
};

export default HeaderComponent;
