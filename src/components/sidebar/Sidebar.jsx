import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../../assets/images/logo.png';
import sidebar_items from '../../assets/JsonData/sidebar_routes.json';

const SidebarWrapper = styled(Drawer)(({ theme }) => ({
        fontFamily: "Mulish, sans-serif",
        width: 300, // Increase width of the sidebar
        '& .MuiDrawer-paper': {
        width: 300, // Adjust paper width to match sidebar width
        boxSizing: 'border-box',
        backgroundColor: 'white',
        borderRight: 'none',
        padding: 15,
    },
}));

const LogoWrapper = styled('div')({
    padding: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const LogoImage = styled('img')({
    height: 120, // Increase logo size
    padding: '10px 20px', 
    '&:hover': {
        backgroundColor: 'transparent', // No hover effect
    },
});

const SidebarItem = styled(ListItem)(({ theme, active }) => ({
    fontFamily: "Mulish, sans-serif",
    fontSize: '1.5rem', // Increase font size for sidebar text
    fontWeight: 700, // Make the text bold
    color: active ? 'white' : theme.palette.text.primary, 
    backgroundColor: active ? '#349eff' : 'white', 
    borderRadius: '5px', // Rounded corners for the active item
    padding: '10px 20px', 
    '&:hover': {
        backgroundColor: active?'#349eff': 'transparent', // No hover effect
    },
    transition: 'background-color 0.3s', // Smooth transition for background color change
}));

const SidebarIcon = styled('i')(({ theme, active }) => ({
    fontSize: '1.5rem', // Increase icon size
    fontWeight: 'bold', // Make the icon bold
    color: active ? 'white' : '#349eff', // Set the icon color to the desired blue color,
    padding: '10px 20px', 
    '&:hover': {
        backgroundColor: 'transparent', // No hover effect
    },
    
}));

const Sidebar = () => {
    const location = useLocation(); // Get the current location/pathname

    return (
        <SidebarWrapper variant="permanent" anchor="left" open>
            {/* Sidebar Logo */}
            <LogoWrapper>
                <LogoImage src={logo} alt="Company Logo" />
            </LogoWrapper>

            {/* Sidebar Items List */}
            <List>
                {sidebar_items.map((item, index) => {
                    const isActive = location.pathname === item.route; // Check if the item is active based on the current route

                    return (
                        <Link to={item.route} key={index} style={{ textDecoration: 'none' }}>
                            <SidebarItem button active={isActive}>
                                <ListItemIcon>
                                    <SidebarIcon className={item.icon} active={isActive}></SidebarIcon>
                                </ListItemIcon>
                                <ListItemText primary={item.display_name} />
                            </SidebarItem>
                        </Link>
                    );
                })}
            </List>
        </SidebarWrapper>
    );
};

export default Sidebar;
