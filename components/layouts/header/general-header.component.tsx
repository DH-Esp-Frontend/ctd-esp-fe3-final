import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';

const GeneralHeader = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <NextLink href="/" passHref>
                        <MUILink variant="h6" sx={{
                            mr: 2,
                            flexGrow: 1,
                            fontWeight: 700,
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>  DH-Marvel</MUILink>
                    </NextLink>
                    <Box>
                        <NextLink href="/" passHref>
                            <MUILink variant="body2" sx={{color: 'white'}}>FAQ</MUILink>
                        </NextLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default GeneralHeader;
