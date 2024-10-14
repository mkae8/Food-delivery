"use client";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { Search } from '@mui/icons-material';

const Hool = [
    { title: 'Tsuiwan' },
    { title: 'Budaatai huurga' },
    { title: 'Holimog Huurga' },
    { title: 'Undugtei huurga' },
];

export const SearchInput = () => {
    return (
        <Stack sx={{ width: 360 }}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={Hool.map((option) => option.title)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                       
                        InputProps={{
                            ...params.InputProps,
                            startAdornment: <Search />,
                            type: 'search',
                        }}
                        placeholder="Хайх..."
                    />
                )}
            />
        </Stack>
    );
};
