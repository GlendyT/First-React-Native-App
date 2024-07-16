/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */

import {StyleSheet} from 'react-native';
import {View} from 'react-native';

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.purpleBox]} />
      <View style={[styles.box, styles.orangeBox]} />
      <View style={[styles.box, styles.blueBox]} />
    </View>
  );
};

//TODO TAREA 9
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    top: 100,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    right: -100,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});

//TODO TAREA 2
  /*

  //TODO TAREA 1
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    flex: 1,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#28425B',
      justifyContent: 'center',
      alignItems: 'stretch',
      flexDirection: 'column',
    },
    box: {
      width: 100,
      height: 100,
      borderWidth: 10,
      borderColor: 'white',
    },
  
    purpleBox: {
      backgroundColor: '#5856D6',
    },
    orangeBox: {
      backgroundColor: '#F0A23B',
    },
    blueBox: {
      backgroundColor: '#28C4D9',
      width: 'auto',
    },
  });
   
//TODO TAREA 3
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    alignSelf: 'center',
  },
});
//TODO TAREA 4
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexDirection: 'column',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    alignSelf: 'flex-end',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    alignSelf: 'center',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    alignSelf: 'flex-start',
  },
});
//TODO TAREA 5
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    width: 100,
    borderWidth: 10,
    borderColor: 'white',
    height: 'auto',
  },

  purpleBox: {
    backgroundColor: '#5856D6',

  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
//TODO TAREA 6
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column',
  },
  box: {
    width: 'auto',
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    flex: 2,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    flex: 2,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
    flex: 3,
  },
});
//TODO TAREA 7
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
//TODO TAREA 8
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    left: 100,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});
//TODO TAREA 9 PENDIENTE
//TODO TAREA 9
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
    top: 100,
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    right: -100,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
});

//TODO TAREA 10
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28425B',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
  },

  purpleBox: {
    backgroundColor: '#5856D6',
  },
  orangeBox: {
    backgroundColor: '#F0A23B',
    top: 50,
  },
  blueBox: {
    backgroundColor: '#28C4D9',
  },
}); */
