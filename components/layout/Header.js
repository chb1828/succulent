import {alpha, AppBar, Box, Container, IconButton, InputBase, Toolbar, Typography} from "@mui/material";
import {styled} from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';
import {Favorite, Menu, MoreVert, Person, ShoppingCart} from "@mui/icons-material";
import {useState} from "react";

const Search = styled('div')(({ theme }) => ({
    display: "flex",
    position: 'relative',
    border: "solid 1px rgba(0, 0, 0, .3)",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '35%',
    },
    "& .MuiButtonBase-root": {
        flexGrow: 1
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    flexGrow: 9,
    width: '90%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(1)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
}));

const CustomToolBar = styled(Toolbar)(({theme}) => ({
    height: '100px',
    justifyContent: "space-between"
}));

const Header = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    return (
        <AppBar position="static" color="transparent" elevation={0}>
            <Container maxWidth="lg">
                <CustomToolBar disableGutters>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            sx={{ mr: 2 }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                    <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGO
                    </Typography>
                    <Search>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <IconButton>
                            <SearchIcon/>
                        </IconButton>
                    </Search>
                    <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Person/>
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <Favorite/>
                        </IconButton>
                        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                            <ShoppingCart/>
                        </IconButton>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                           /* aria-controls={mobileMenuId}*/
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreVert/>
                        </IconButton>
                    </Box>
                </CustomToolBar>
            </Container>
        </AppBar>

    );
};

Header.defaultProps = {
    title: "타이틀"
}

export default Header;