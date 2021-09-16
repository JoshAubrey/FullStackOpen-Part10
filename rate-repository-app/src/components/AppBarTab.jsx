import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700',
      }
  });

const AppBarTab = ({title}) => {
  return (
    <View style={styles.container}>
        <Pressable><Text style={styles.text}>{title}</Text></Pressable>
    
    </View>
  );
};

export default AppBarTab;