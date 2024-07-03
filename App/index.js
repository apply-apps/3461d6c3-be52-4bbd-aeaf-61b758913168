// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tales for Kids</Text>
      <Button
        title="Tale 1"
        onPress={() => navigation.navigate('Tale1')}
        style={styles.button}
      />
      <Button
        title="Tale 2"
        onPress={() => navigation.navigate('Tale2')}
        style={styles.button}
      />
      <Button
        title="Tale 3"
        onPress={() => navigation.navigate('Tale3')}
        style={styles.button}
      />
    </SafeAreaView>
  );
};

const Tale1Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tale 1</Text>
      <Text style={styles.tale}>
        Once upon a time, in a faraway land, there was a brave little rabbit...
      </Text>
    </SafeAreaView>
  );
};

const Tale2Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tale 2</Text>
      <Text style={styles.tale}>
        In the deep blue ocean, a friendly dolphin named Dory...
      </Text>
    </SafeAreaView>
  );
};

const Tale3Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Tale 3</Text>
      <Text style={styles.tale}>
        High in the mountains, there lived a wise old owl...
      </Text>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tale1" component={Tale1Screen} />
        <Stack.Screen name="Tale2" component={Tale2Screen} />
        <Stack.Screen name="Tale3" component={Tale3Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginVertical: 10,
  },
  tale: {
    fontSize: 18,
    marginVertical: 20,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
});