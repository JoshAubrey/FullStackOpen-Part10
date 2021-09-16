import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 30,
    backgroundColor: theme.colors.appBar,
  },
  text: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab title = 'Repositories' />
    
    </View>
  );
};

export default AppBar;