import {useTheme} from '../../hooks';
import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RnActivityIndicatorProps,
} from 'react-native';

interface ActivityIndicatorProps extends RnActivityIndicatorProps {}

const ActivityIndicator = (props: ActivityIndicatorProps) => {
  const theme = useTheme();

  return <RNActivityIndicator color={theme.colors['primary']} {...props} />;
};

export default ActivityIndicator;
