import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles((theme) => ({
	root: {
		display:'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
	},
	appbar: {
		background: 'none',
		fontFamily: 'Bodoni Moda',
	},
	appbarWrapper: {
		width: '80%',
		margin: '0 auto',
	},
	appbarTitle: {
		flexGrow: '1',
	},
	icon: {
		fontSize: 30, 
        color: '#fff'
	},
	container: {
		textAlign: 'center',
	},
	text: {
		fontFamily: 'Arial',
		color: '#fff',
		fontSize: '2.5rem',
	},
	down: {
		color: '#fff',
		fontSize: '5rem',
	},
}));

// Menu
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

/* Tällä hetkellä annan yläpalkin olla ilman otsikkoa */
function Header() {
	const styling = useStyles();
	const [checked, setChecked] = useState(false);
	
	useEffect(()=>{
		setChecked(true);
	},[])

	const [anchorEl, setAnchorEl] = React.useState(null);

  	const handleClick = (event) => {
    	setAnchorEl(event.currentTarget);

    	console.log('I was triggered')
  	};

  	const handleClose = () => {
    	setAnchorEl(null);
  	};

  	function handleItemClick (value) {
		alert(`value, ${value}`);
  	}

	return (
	<div className={styling.root}>
		<AppBar className={styling.appbar} elevation={0}>
			<Toolbar className={styling.appbarWrapper}>
				
				<h1 className={styling.appbarTitle}></h1>
				<IconButton
        			aria-controls="customized-menu"
        			aria-haspopup="true"
        			onClick={handleClick}
        			style={{ 
            			color: '#fff'
        			}}
      			>
        			<SortIcon className={styling.icon} 
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
			</Toolbar>
		</AppBar>
		<Collapse 
			in={checked}
			{ ...(checked ? {timeoouot: 1000 } : {})}
			collapsedHeight={50}
		>
		<div className={styling.container}>
			<h1 className={styling.text}>
					Tervetuloa <br/>Lauran & Eeron <br/><span>hääsivulle.</span>
			</h1>
			<IconButton>
				<KeyboardArrowDownIcon className={styling.down}/>
			</IconButton>
		</div>
		</Collapse>
	</div>
	)
}

export default Header;