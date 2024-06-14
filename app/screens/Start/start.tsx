import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import SwipeButton from 'rn-swipe-button';
import { RootReducerInterface } from '../../interfaces/rootReducerInterfaces';
import { NavigationProp } from '@react-navigation/native';

interface StartScreenProps {
  navigation: NavigationProp<any>;
}

const StartScreen: React.FC<StartScreenProps> = ({ navigation }) => {
  const userSelector = useSelector((state: RootReducerInterface) => state.app);
  const { loading, isAppOpen } = userSelector;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>Choose your favorite drink from your place</Text>
      <SwipeButton
        disabled={false}
        swipeSuccessThreshold={70}
        height={60}
        width={330}
        title='Swipe to get Started'
        onSwipeSuccess={() => {
          navigation.navigate('login');
          console.log('Submitted Successfully!');
        }}
        onSwipeStart={() => {
          console.log('swipe start');
        }}
        titleFontSize={16}
        titleColor='white'
        shouldResetAfterSuccess
        railFillBackgroundColor='#47A3A8'
        railFillBorderColor='#47A3A8'
        thumbIconBackgroundColor='white'
        thumbIconBorderColor='white'
        railBackgroundColor='#47A3A8'
        railBorderColor='#47A3A8'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingBottom: 60,
  },
  title: {
    color: 'black',
    padding: 10,
    fontWeight: '500',
    fontSize: 26,
  },
  subtitle: {
    color: 'black',
    padding: 10,
    fontWeight: '400',
    fontSize: 14,
  },
});

export default StartScreen;
