import { Box } from "@mui/material";

import Header from "/src/components/Header";
import LineChart from "/src/components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
    <Header title="Line Chart" subtitle="Simple Line Chart" />
    <Box height="75vh">
      <LineChart />
    </Box>
  </Box>
  )
}

export default Line;