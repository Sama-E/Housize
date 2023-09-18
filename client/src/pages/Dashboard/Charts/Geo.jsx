import { Box, useTheme } from "@mui/material";

import { tokens } from "/src/theme";
import Header from "/src/components/Header";
import GeoChart from "/src/components/GeoChart";

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  return (
    <Box m="20px">
      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  )
}

export default Geo;