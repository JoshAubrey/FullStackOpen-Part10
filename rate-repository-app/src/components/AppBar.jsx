import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    //paddingTop: Constants.statusBarHeight,
    padding: 30,
    backgroundColor: theme.colors.appBar,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  // text: {
  //   color: 'white',
  //   fontSize: 15,
  //   fontWeight: '700',
  // }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab title='Repositories' link='' />
        <AppBarTab title='Sign In' link='/signin' />
      </ScrollView>
    </View>      
  );
};

export default AppBar;