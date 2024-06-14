import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface User {
  name: string;
  password: string;
}

interface StartScreenProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen = ({ navigation }: StartScreenProps) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  console.log(navigation);

  const onSignin = useCallback(async () => {
    const payload: User = {
      name,
      password,
    };
    try {
      await AsyncStorage.setItem('user', JSON.stringify(payload));
      console.log('Data stored successfully');
      await navigation.navigate('home');
    } catch (error) {
      console.log('error while set data in localstorage', error);
    }
  }, [name, navigation, password]);

  return (
    <>
      <KeyboardAwareScrollView style={{ flex: 1, backgroundColor: 'white' }} keyboardShouldPersistTaps='handled'>
        <View style={styles.container}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
          <TextInput
            style={styles.input}
            placeholder='User Name'
            placeholderTextColor='#888'
            onChangeText={(text: string) => {
              setName(text);
            }}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            onChangeText={(text: string) => {
              setPassword(text);
            }}
            placeholderTextColor='#888'
            secureTextEntry
          />
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => {
              onSignin();
            }}>
            <Text style={styles.signInButtonText}>Sign in</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>Or Login with</Text>
          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text style={styles.registerLink} onPress={() => {}}>
              Register
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    marginTop: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    color: '#888',
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#47A3A8',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    marginVertical: 10,
    color: '#888',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
  },
  registerText: {
    marginTop: 20,
    color: '#888',
  },
  registerLink: {
    color: '#47A3A8',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
