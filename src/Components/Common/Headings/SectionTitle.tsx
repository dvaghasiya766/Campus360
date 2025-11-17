import React from 'react';
import { Typography, Box } from '@mui/material';
import Colors from '../../../Const/Colors';

interface SectionTitleProps {
  title: string;
  color?: string;
  underline?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  color = Colors.primary,
  underline = true
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Oswald',
          fontWeight: 600,
          color: color,
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {title}
        {underline && (
          <Box
            sx={{
              position: 'absolute',
              bottom: -4,
              left: 0,
              width: '60%',
              height: 3,
              backgroundColor: color,
              borderRadius: 2,
            }}
          />
        )}
      </Typography>
    </Box>
  );
};

export default SectionTitle;