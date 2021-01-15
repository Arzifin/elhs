import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core/';
import SortIcon from '@material-ui/icons/Sort';
import BookIcon from '@material-ui/icons/Book';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SubjectIcon from '@material-ui/icons/Subject';
import InfoIcon from '@material-ui/icons/Info';

/*
paper: {
  border: '1px solid #d3d4d5',
},
*/
const StyledMenu = withStyles({
  paper: {
    
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

// Klikkauksen aiheuttama taustaväri (tietenkin) vaihdettavissa
// OPT1: #E6BE8A
// OPT2: #535454
const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#535454',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function DropMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  // Valikon ikonit muuttavat väriä myös napin painalluksesta
  const [iconColor, setIconColor] = React.useState('#000000');

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);

    console.log('I was triggered')
  };

  function handleItemClick (value) {
    alert(`value, ${value}`);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // Muutettu valikko, jossa voi kustomisoida ikonin valikkoalkion viereen
    <div>
      <IconButton
        aria-controls="customized-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ 
            color: '#fff'
        }}
      >
        <SortIcon 
            style={{ 
                fontSize: 30, 
                color: '#fff'
            }}
        />
	  </IconButton>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >  
        <StyledMenuItem onClick={() => handleItemClick(1)}>
          <ListItemText primary="Tarina" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleItemClick(2)}> 
          <ListItemText primary="Ilmoittautuminen" />
        </StyledMenuItem>
        <StyledMenuItem onClick={() => handleItemClick(3)}>
          <ListItemText primary="Info" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
