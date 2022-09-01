import * as React from 'react';
import Box from '@mui/material/Box';
import Image from "next/image";
import {Link} from "@mui/material";

const GeneralFooter = () => {
    return (
        <Box  component={"footer"} display={'flex'}  p={'1rem 0'}
              alignItems='center'
              justifyContent={'center'}
              borderTop={'1px solid #eaeaea'}
        sx={{backgroundColor: '#000'}}>
            <Link
                href="https://www.digitalhouse.com"
                target="_blank"
                rel="noopener noreferrer"
                display={'flex'}
                flexGrow={1}
                alignItems={'center'}
                justifyContent={'center'}
                color={'#fff'}
                sx={{textDecoration: 'none'}}
            >
                Powered by{' '}
                <Box ml={'0.5rem'} display={'flex'}   alignItems='center'
                     justifyContent={'center'}>
                    <Image src="https://dh-frontend.cdn.prismic.io/dh-frontend/f197059f-7cf3-4a35-a182-314ea08cb560_LogoHeader.svg" alt="Digital House Logo" width={168} height={13} />
                </Box>
            </Link>
        </Box>
    );
};
export default GeneralFooter;
