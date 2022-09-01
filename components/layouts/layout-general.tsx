import * as React from 'react';
import {FC, PropsWithChildren} from "react";
import {Stack} from "@mui/material";
import GeneralHeader from "./header/general-header.component";
import GeneralFooter from "./footer/general-footer.component";
import Box from "@mui/material/Box";


const LayoutGeneral: FC<PropsWithChildren> = ({children}: PropsWithChildren) => {

    return (<>
            <Stack direction={"column"} height={'100%'}>
                <GeneralHeader />
                <Box display={'flex'} flexGrow={1}>
                    {children}
                </Box>
                <GeneralFooter />
            </Stack>
        </>
    );
};
export default LayoutGeneral;
