import React, { useEffect, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';



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
	  // Estää pomppivan taustan (padding ongelma)
	  disableScrollLock='true'
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
// TÄLLÄ HETKELLÄ KOMMENTOITU POIS, KOSKA TYYLITTELYÄ EI TARVITA
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

  	};

  	const handleClose = (value) => {
		setAnchorEl(null);
		
		// Menu event logic(s)
		if (value == 1) {
			alert("Päädyit Tarinaan");
		}
		else if (value == 2) {
			alert("Päädyit Ilmoittautumiseen");
		}
		else if (value == 3) {
			alert("Päädyit Infoon");
		}
		else {
			
		}
		
  	};

	return (
	<div className={styling.root}>
		<AppBar className={styling.appbar} elevation={0}>
			<Toolbar className={styling.appbarWrapper}>
				
				<h1 className={styling.appbarTitle}></h1>
				<IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
					<MenuIcon className={styling.icon} 
            			/*style={{ 
                			fontSize: 30, 
                			color: '#fff'
            			}}*/
        			/>
      			</IconButton>
      			<StyledMenu
        			id="simple-menu"
        			anchorEl={anchorEl}
        			keepMounted
        			open={Boolean(anchorEl)}
					onClose={handleClose}
					
      			>
					
					<MenuItem 
						value={1} onClick={event => handleClose(event.target.value)}>Tarina
					</MenuItem>
					<MenuItem 
						value={2} onClick={event => handleClose(event.target.value)}>Ilmoittautuminen
					</MenuItem>
					<MenuItem 
						value={3} onClick={event => handleClose(event.target.value)}>Info
					</MenuItem>
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