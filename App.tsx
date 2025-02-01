/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.welcomeText}>
        Welcome to{' '}
        <Text
          style={{ color: 'rgb(171, 91, 85)', textDecorationLine: 'underline' }}
          onPress={() => Linking.openURL('https://code-b.dev')}>
          CODEB
        </Text>
      </Text>
    </View>
  );
};

const LoginScreen = (): React.JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmitPress = () => {
    if (username === '' || password === '') {
      setMessage('Please provide all values');
    } else {
      if (username === 'codeb@gmail.com' && password === 'Password@1234') {
        setMessage('SUCCESS');
      } else {
        setMessage('INCORRECT CREDENTIAL');
      }
    }
  };
  return (
    <View>
      <TextInput
        placeholder="Enter username"
        autoCapitalize="none"
        id="username"
        keyboardType="email-address"
        onChangeText={setUsername}
      />
      <TextInput
        id="password"
        placeholder="Enter Password"
        autoCapitalize="none"
        keyboardType="default"
        onChangeText={setPassword}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={handleSubmitPress}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
      {message === 'SUCCESS' ? (
        <Text>
          <WelcomeScreen />{' '}
        </Text>
      ) : (
        <View>
          <Text>{message}</Text>
        </View>
      )}
    </View>
  );
};

function App(): React.JSX.Element {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 28,
  },
});

export default App;