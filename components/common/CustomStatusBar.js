import React from 'react';
import { StatusBar } from 'react-native';
import palette from '../../lib/styles/open-color';

const CustomStatusBar = ({ colorScheme }) => {
  return (
    <StatusBar
      barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
      backgroundColor={
        colorScheme === 'dark' ? palette.gray[9] : palette.gray[0]
      }
    />
  );
};

export default CustomStatusBar;
