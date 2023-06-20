import { Link } from 'react-router-dom';

import { 
    Drawer, 
    Box, 
    Typography, 
    List, 
    ListItem, 
    ListItemText, 
    ListItemIcon, 
    Collapse ,
    Avatar,
    Paper,
    Grid
} from '@mui/material';
import { AccountBox, ShoppingCart, AssignmentInd, Store, LocalHospital, People, Category, ExpandLess, ExpandMore } from '@mui/icons-material';
import React, { useState , useEffect } from 'react';
import { clientInstance } from '../../config/config';
import Sidebar from '../../components/sidebar/sidebar';

const img = {
    "categories": "/images/category.png",
    "inventories": "images/generic.png",
    "medications": "images/medicine.png",
    "patient_phones": "images/pngegg.png",
    "patients": "images/pngegg (1).png",
    "prescriptions": "images/pngegg (2).png",
    "purchase_orders": "images/pngegg (3).png",
    "refills": "images/pngegg (4).png",
    "roles": "images/generic.png",
    "sales": "images/cash.ico",
    "supplier_phones": "images/pngegg.png",
    "suppliers": "images/supplier.png",
    "user_phones": "images/pngegg.png",
    "users": "images/users.png"
}


function Dashboard() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        clientInstance.get("/allNumber").then((res) => { 
            // console.log(res.data);
            setData(res.data.allTableDataCount);
            console.log(data);
        })    
    }, []);

  return (
    <Grid container>
        <Grid item xs={12} md={2}>
            <Sidebar />
        </Grid>
    {/* <Sidebar /> */}
    <Grid item xs={12} md={10}>
    <Box sx={{
        marginTop: 8,
    }}>
      <Grid container spacing={3}>
        {data.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              sx={{ 
                 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'center',
                  height: 300,
                  justifyContent: 'center',
                }}
                >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 100, height: 100 }}>
    <img src={img[item.TABLE_NAME]} alt={item.TABLE_NAME} width="100%" height="100%" />
  </Avatar>
              <Typography variant="h5" gutterBottom>
                {item.TABLE_NAME}
              </Typography>
              <Typography variant="h3">
                {item.TABLE_ROWS}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Grid>
    </Grid>
  );
}

// const newData = [
//     {
//       title: 'Inventory',
//       icon: <Category />,
//       subItems: [
//         { title: 'Medicines', count: 200, icon: <LocalHospital />, img: '/images/medicine.png' },
//         { title: 'Refill', count: 800, icon: <LocalHospital />, img: '/images/refill.png' },
//         { title: 'Categories', count: 700, icon: <Category />, img: '/images/category.png' },
//       ],
//     },
//     {
//       title: 'Sales',
//       icon: <ShoppingCart />,
//       subItems: [
//         { title: 'Sales', count: 500, icon: <ShoppingCart />, img: '/images/cash.ico' },
//         { title: 'Purchase Orders', count: 400, icon: <ShoppingCart />, img: '/images/cash.ico' },
//       ],
//     },
//     {
//       title: 'User Management',
//       icon: <People />,
//       subItems: [
//         { title: 'Patients', count: 300, icon: <People />, img: '/images/user.ico' },
//         { title: 'Staffs', count: 600, icon: <AccountBox />, img: '/images/users.png' },
//         { title: 'Suppliers', count: 100, icon: <Store />, img: '/images/supplier.png' },
//       ],
//     },
//   ];

// function Sidebar() {
//     const [openInventory, setOpenInventory] = useState(false);
//     const [openSales, setOpenSales] = useState(false);
//     const [openUserManagement, setOpenUserManagement] = useState(false);
  
//     const handleInventoryClick = () => {
//       setOpenInventory(!openInventory);
//     };
  
//     const handleSalesClick = () => {
//       setOpenSales(!openSales);
//     };
  
//     const handleUserManagementClick = () => {
//       setOpenUserManagement(!openUserManagement);
//     };
  
//     return (
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: 300,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: 300, boxSizing: 'border-box' },
//         }}
//       >
//         <Box bgcolor="#FEF0D6" marginTop={5} justifyContent="center" textAlign="center">
//           <Typography variant="h1" color="#123455" fontSize={40} fontWeight={600}>
//             Manager Dashboard
//           </Typography>
//         </Box>
//         <Box marginTop={5}>
//           <List>
//             <ListItem button onClick={handleSalesClick}>
//               <ListItemIcon>
//                 <ShoppingCart />
//               </ListItemIcon>
//               <ListItemText primary="Sales" />
//               {openSales ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={openSales} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {newData
//                   .find((item) => item.title === 'Sales')
//                   .subItems.map((subItem, index) => (
//                     <ListItem button key={index} component={Link} to={`/${subItem.title.toLowerCase()}`}>
//                       <ListItemIcon>{subItem.icon}</ListItemIcon>
//                       <ListItemText primary={subItem.title} />
//                     </ListItem>
//                   ))}
//               </List>
//             </Collapse>
//             <ListItem button onClick={handleInventoryClick}>
//               <ListItemIcon>
//                 <Category />
//               </ListItemIcon>
//               <ListItemText primary="Inventory" />
//               {openInventory ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={openInventory} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {newData
//                   .find((item) => item.title === 'Inventory')
//                   .subItems.map((subItem, index) => (
//                     <ListItem button key={index} component={Link} to={`/${subItem.title.toLowerCase()}`}>
//                       <ListItemIcon>{subItem.icon}</ListItemIcon>
//                       <ListItemText primary={subItem.title} />
//                     </ListItem>
//                   ))}
//               </List>
//             </Collapse>
//             <ListItem button onClick={handleUserManagementClick}>
//               <ListItemIcon>
//                 <People />
//               </ListItemIcon>
//               <ListItemText primary="User Management" />
//               {openUserManagement ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={openUserManagement} timeout="auto" unmountOnExit>
//               <List component="div" disablePadding>
//                 {newData
//                   .find((item) => item.title === 'User Management')
//                   .subItems.map((subItem, index) => (
//                     <ListItem button key={index} component={Link} to={`/${subItem.title.toLowerCase()}`}>
//                       <ListItemIcon>{subItem.icon}</ListItemIcon>
//                       <ListItemText primary={subItem.title} />
//                     </ListItem>
//                   ))}
//               </List>
//             </Collapse>
//             {newData
//               .filter((item) => !['Sales', 'Inventory', 'User Management'].includes(item.title))
//               .map((item, index) => (
//                 <ListItem button key={index} component={Link} to={`/${item.title.toLowerCase()}`}>
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.title} />
//                 </ListItem>
//               ))}
//           </List>
//         </Box>
//       </Drawer>
//     );
//   }
export default Dashboard;


