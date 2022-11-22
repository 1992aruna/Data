import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/forms"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All Forms</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;