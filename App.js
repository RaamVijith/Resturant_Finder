import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Hello World</Text>
      </View>
      <View>
          <View>
            <Text>Steps</Text>
            <Text>1.296</Text>
          </View>
          <View>
            <Text>Distance</Text>
            <Text>0175Km</Text>
          </View>
      </View>
      <View>
        <Text>Flights Climbed</Text>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
