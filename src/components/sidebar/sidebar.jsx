import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse } from '@mui/material';
import { AccountBox, ShoppingCart, AssignmentInd, Store, LocalHospital, People, Category, ExpandLess, ExpandMore } from '@mui/icons-material';

const newData = [
    {
      title: 'Inventory',
      icon: <Category />,
      subItems: [
        { title: 'Medicines', count: 200, icon: <LocalHospital />, img: '/images/medicine.png' },
        { title: 'Refill', count: 800, icon: <LocalHospital />, img: '/images/refill.png' },
        { title: 'Categories', count: 700, icon: <Category />, img: '/images/category.png' },
      ],
    },
    {
      title: 'Sales',
      icon: <ShoppingCart />,
      subItems: [
        { title: 'Sales', count: 500, icon: <ShoppingCart />, img: '/images/cash.ico' },
        { title: 'Purchase Orders', count: 400, icon: <ShoppingCart />, img: '/images/cash.ico' },
      ],
    },
    {
      title: 'User Management',
      icon: <People />,
      subItems: [
        { title: 'Patients', count: 300, icon: <People />, img: '/images/user.ico' },
        { title: 'Staffs', count: 600, icon: <AccountBox />, img: '/images/users.png' },
        { title: 'Suppliers', count: 100, icon: <Store />, img: '/images/supplier.png' },
      ],
    },
  ];

export default function Sidebar() {
    const [openInventory, setOpenInventory] = useState(false);
    const [openSales, setOpenSales] = useState(false);
    const [openUserManagement, setOpenUserManagement] = useState(false);
  
    const handleInventoryClick = () => {
      setOpenInventory(!openInventory);
    };
  
    const handleSalesClick = () => {
      setOpenSales(!openSales);
    };
  
    const handleUserManagementClick = () => {
      setOpenUserManagement(!openUserManagement);
    };
  
    return (
      <Drawer
        variant="permanent"
        sx={{
          width: 300,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
        }}
      >
        <Box bgcolor="#FEF0D6" marginTop={5} justifyContent="center" textAlign="center">
          <Typography variant="h1" color="#123455" fontSize={40} fontWeight={600}>
            Manager Dashboard
          </Typography>
        </Box>
        <Box marginTop={5}>
          <List>
            <ListItem button onClick={handleSalesClick}>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <ListItemText primary="Sales" />
              {openSales ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSales} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {newData
                  .find((item) => item.title === 'Sales')
                  .subItems.map((subItem, index) => (
                    <ListItem button key={index} component={Link} to={`/${subItem.title.toLowerCase()}`}>
                      <ListItemIcon>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
            <ListItem button onClick={handleInventoryClick}>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <ListItemText primary="Inventory" />
              {openInventory ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openInventory} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {newData
                  .find((item) => item.title === 'Inventory')
                  .subItems.map((subItem, index) => (
                    <ListItem button key={index} component={Link} to={`/${subItem.title.toLowerCase()}`}>
                      <ListItemIcon>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
            <ListItem button onClick={handleUserManagementClick}>
              <ListItemIcon>
                <People />
              </ListItemIcon>
              <ListItemText primary="User Management" />
              {openUserManagement ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openUserManagement} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {newData
                  .find((item) => item.title === 'User Management')
                  .subItems.map((subItem, index) => (
                    <ListItem button key={index} component={Link} to={`/${subItem.title.toLowerCase()}`}>
                      <ListItemIcon>{subItem.icon}</ListItemIcon>
                      <ListItemText primary={subItem.title} />
                    </ListItem>
                  ))}
              </List>
            </Collapse>
            {newData
              .filter((item) => !['Sales', 'Inventory', 'User Management'].includes(item.title))
              .map((item, index) => (
                <ListItem button key={index} component={Link} to={`/${item.title.toLowerCase()}`}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItem>
              ))}
          </List>
        </Box>
      </Drawer>
    );
  }
