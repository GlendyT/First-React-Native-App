/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {StyleSheet, View} from 'react-native';

export const PostitionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBoz} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   height: 150,
    //  width: 300,
    backgroundColor: '#0b9774',
    // justifyContent: 'center',
    //alignItems: 'center',
  },
  purpleBoz: {
    width: 100,
    height: 100,
    backgroundColor: '#5856D6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 0,
  },
  orangeBox: {
    width: 100,
    height: 100,
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 0,
    right: 0,
  },
  greenBox: {
    //flex:1,
    //width: 100,
    //height: 100,
    backgroundColor: '#0f8532',
    borderWidth: 10,
    borderColor: 'white',
    //position: 'absolute',
    //bottom: 0,
    //top: 0,
    //right: 0,
    //left: 0,
    ...StyleSheet.absoluteFillObject,
  },
});
