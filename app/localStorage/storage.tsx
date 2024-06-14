import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../screens/Login/login';

const storeUserData = async (user: User) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('user', jsonValue);
    console.log('Data stored successfully');
  } catch (e) {
    console.log('Failed to store data', e);
  }
};

const getUserData = async (): Promise<User | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem('user');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Failed to retrieve data', e);
    return null;
  }
};
