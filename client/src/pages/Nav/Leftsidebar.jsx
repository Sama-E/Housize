import { useState } from "react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import House from "/src/assets/suburbanHouse.jpg";

//Menu Item Style
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    
      <MenuItem component={<Link to={to} />}
        active={selected === title}
        style={{
          color: colors.grey[600],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        
      </MenuItem>
  );
};

// Left Side Bar
const Leftsidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  //Page selected
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .menu-item.active": {
          color: "#6870fa !important",
        },
        
      }}
      >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">

          {/* LOGO AND MENU ICON (Make logo icon menu icon) */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h5" color={colors.grey[600]}>
                  Primary Resident
                </Typography>

                {/* Menu Icon */}
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* HOUSE PROFILE PIC, ADDRESS */}

          {!isCollapsed && (

            <Box mb="25px">

            {/* House Profile Pic */}
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="130px"
                  height="100px"
                  src={House}
                  style={{ cursor: "pointer" }}
                />
              </Box>

            {/* Address */}
              <Box textAlign="center">
                <Typography
                  variant="h4"
                  color={colors.grey[600]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  1600 Imagine Avenue Fairfax, VA 22222-2222
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[600]}>
                  Primary Resident
                </Typography>
              </Box>
            </Box>
          )}

          {/* DASHBOARD */}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >


              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Invoices Balances"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h6"
              color={colors.grey[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>

            <Item
              title="Profile"
              to="/profile"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />







            <Typography
              variant="h6"
              color={colors.grey[600]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>

            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />



          </Box>

        </Menu>
      </Sidebar>
    </Box>
  )
}

export default Leftsidebar;