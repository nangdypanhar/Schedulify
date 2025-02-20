import React from "react";
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function Checkbox() {
    return (
        <div>
            <Checkbox {...label} />
        </div>
    );
}