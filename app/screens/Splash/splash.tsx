import React, { useCallback, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CommonActions } from '@react-navigation/native';
import screens from '../../constant/screens';

const SpalshScreen = ({ navigation }: any) => {
  console.log('hello');
  const loadData = useCallback(async () => {
    let screen: string;
    const jsonValue = await AsyncStorage.getItem('user');
    console.log('---', jsonValue);
    try {
      if (jsonValue != null) {
        screen = screens.Home;
      } else {
        screen = screens.Start;
      }

      setTimeout(async () => {
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [
              {
                name: screen,
              },
            ],
          }),
        );
      }, 1000);
    } catch (error) {
      console.log('error', error);
    }
  }, [navigation]);

  useEffect(() => {
    loadData(), [];
  });

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Redirecting</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: 'red',
  },
});

export default SpalshScreen;
