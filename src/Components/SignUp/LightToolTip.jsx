import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#D2EAD8',
        color: '#5E9A6C',
        fontSize: 12,
        maxWidth: 140,
        placement: "center",
    },
}));
export default LightTooltip;