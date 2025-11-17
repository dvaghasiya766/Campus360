import React from 'react';
import { Typography, Box } from '@mui/material';
import Colors from '../../../Const/Colors';

interface GradientTitleProps {
  title: string;
  gradient?: string[];
  size?: 'small' | 'medium' | 'large';
}

const GradientTitle: React.FC<GradientTitleProps> = ({ 
  title, 
  gradient = [Colors.Emerald, Colors.Sky],
  size = 'medium'
}) => {
  const sizeMap = {
    small: 'h6',
    medium: 'h5', 
    large: 'h4'
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant={sizeMap[size] as any}
        sx={{
          fontFamily: 'Oswald',
          fontWeight: 700,
          background: `linear-gradient(45deg, ${gradient[0]}, ${gradient[1]})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          display: 'inline-block',
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default GradientTitle;