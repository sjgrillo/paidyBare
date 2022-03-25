import React, { ReactElement } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';
import { RootStackScreenProps } from '../types';

export const StartScreen = ({ navigation }: RootStackScreenProps<'Start'>): ReactElement => {
  const authenticateLabel = 'Authenticate';
  const welcomeTitle = 'Welcome! Click below to authenticate';

  const handleBiometricAuth = async () => {
    const isCompatible = await LocalAuthentication.hasHardwareAsync();
    if (isCompatible) {
      const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
      if (!savedBiometrics) {
        console.log('No auth data');
      } else {
        const options: LocalAuthentication.LocalAuthenticationOptions = {
          promptMessage: 'Please verify your identity',
          cancelLabel: 'cancel',
          disableDeviceFallback: true,
        };
        const result = await LocalAuthentication.authenticateAsync(options);
        if (result.success === true) {
          navigation.navigate('MainPage');
        } else {
          navigation.navigate('Start');
        }
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{welcomeTitle}</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleBiometricAuth()}>
        <Text>{authenticateLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTitle: {
    position: 'absolute',
    top: 0,
    fontWeight: 'bold',
    fontSize: 25,
  },
  title: {
    fontSize: 20,
    paddingBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#f06363',
    borderRadius: 50,
    padding: 10,
  },
});
