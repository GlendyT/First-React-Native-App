/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {StyleSheet, View} from 'react-native';

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  box: {
    //flex: 1,
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: '#5856D6',
    // top: -100,
  },
  box2: {
    backgroundColor: '#4646ac',
    //alignSelf: 'flex-end',
  },
  box3: {
    backgroundColor: '#151530',
    // alignSelf: 'center',
    //  top: 100,
  },
  box4: {
    backgroundColor: '#040453',
    // alignSelf: 'center',
    //  top: 100,
  },
});
