'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
    
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { Stack } from '@mui/material';


const LargeAvatar = styled(Avatar)(({ theme }) => ({
    width: 120,
    height: 120,
}));

export const AvatarIcon = () => {
    return (
        <>
            <Badge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                badgeContent={
                    <Stack sx={{borderRadius:"50%", border:"1px solid #D6D8DB", width:"34px", height:"34px", color:"#18BA51", display:"flex", alignItems:"center", justifyContent:"center", bgcolor:"white"}}>

                    <ModeEditOutlineOutlinedIcon />
                    </Stack>
                }
            >
                <LargeAvatar alt="" />
            </Badge>
        </>
    );
};
