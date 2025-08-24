import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>
            Bat Pass Generator
        </Text>
        <Image source={require('../../../assets/logo.png')}
        style={{
            resizeMode: 'contain',
            height: 180
        }} />
    </View>
  );
} 