import React from 'react';
import { Typography, Box, Chip } from '@mui/material';
import Colors from '../../../Const/Colors';

interface BadgeTitleProps {
  title: string;
  badge?: string;
  color?: string;
}

const BadgeTitle: React.FC<BadgeTitleProps> = ({ 
  title, 
  badge,
  color = Colors.primary
}) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Oswald',
          fontWeight: 600,
          color: '#333',
        }}
      >
        {title}
      </Typography>
      {badge && (
        <Chip
          label={badge}
          size="small"
          sx={{
            backgroundColor: `${color}20`,
            color: color,
            fontWeight: 600,
            fontSize: '0.75rem',
          }}
        />
      )}
    </Box>
  );
};

export default BadgeTitle;