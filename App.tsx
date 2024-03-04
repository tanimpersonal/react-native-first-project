import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
const customStyle = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  containerWhite: {
    backgroundColor: 'white',
  },
  viewStyle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // gap: '20px',
  },
});
function App() {
  const deviceStyle = useColorScheme();

  return (
    <SafeAreaView
      style={
        deviceStyle == 'light'
          ? customStyle.containerWhite
          : customStyle.container
      }>
      <View style={customStyle.viewStyle}>
        <Text>Hello World</Text>
        <Text>{deviceStyle}</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
