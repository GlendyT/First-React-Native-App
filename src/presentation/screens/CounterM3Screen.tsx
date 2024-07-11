/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';

import Icon from 'react-native-vector-icons/Ionicons';
import {FAB} from 'react-native-paper';

interface Props {
  label: string;
  onPress: () => void;
  onLongPress: () => void;
}

export const CounterM3Screen = ({label, onPress, onLongPress}: Props) => {
  const [count, setCount] = useState(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>

      {/*<Icon name="accessibility-outline" size={25} />*/}
      <FAB
        //label="+1"
        onPress={() => setCount(count + 1)}
        onLongPress={() => setCount(0)}
        style={[globalStyles.fabStyle]}
        icon="add"
      />
    </View>
  );
};
