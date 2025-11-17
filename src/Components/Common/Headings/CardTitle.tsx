import React from 'react';
import { Typography, Box } from '@mui/material';
import Colors from '../../../Const/Colors';

interface CardTitleProps {
  title: string;
  icon?: React.ReactNode;
  color?: string;
}

const CardTitle: React.FC<CardTitleProps> = ({ 
  title, 
  icon,
  color = Colors.primary
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
      {icon && (
        <Box sx={{ color: color, display: 'flex', alignItems: 'center' }}>
          {icon}
        </Box>
      )}
      <Typography
        variant="h6"
        sx={{
          fontFamily: 'Roboto Condensed',
          fontWeight: 600,
          color: '#333',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CardTitle;