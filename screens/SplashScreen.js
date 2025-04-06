// screens/SplashScreen.js
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, Dimensions } from 'react-native';
import { SvgUri } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window');

export default function SplashScreen({ navigation }) {
  const [avatarUrl, setAvatarUrl] = useState('');
  const titleScale = useRef(new Animated.Value(0.6)).current;
  const avatarScale = useRef(new Animated.Value(0.5)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const loadAvatar = async () => {
      const saved = await AsyncStorage.getItem('avatarSettings');
      if (saved) {
        const avatar = JSON.parse(saved);
        const url = `https://avataaars.io/?avatarStyle=Transparent&topType=${avatar.topType}&accessoriesType=${avatar.accessoriesType}&hairColor=${avatar.hairColor}&facialHairType=${avatar.facialHairType}&facialHairColor=${avatar.facialHairColor}&clotheType=${avatar.clotheType}&clotheColor=${avatar.clotheColor}&eyeType=${avatar.eyeType}&eyebrowType=${avatar.eyebrowType}&mouthType=${avatar.mouthType}&skinColor=${avatar.skinColor}`;
        setAvatarUrl(url);
      }
    };
    loadAvatar();

    Animated.sequence([
      Animated.parallel([
        Animated.timing(titleScale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
          easing: Easing.out(Easing.exp),
        }),
        Animated.timing(fadeIn, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
      Animated.spring(avatarScale, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.replace('Main');
      }, 1000);
    });
  }, []);

  return (
    <LinearGradient colors={["#ffffff", "#f0f0f0"]} style={styles.container}>
      <Animated.Text style={[styles.title, { transform: [{ scale: titleScale }], opacity: fadeIn }]}>성장 캐릭터 키우기</Animated.Text>
      {avatarUrl ? (
        <Animated.View style={{ transform: [{ scale: avatarScale }], opacity: fadeIn }}>
          <SvgUri width="230" height="230" uri={avatarUrl} style={styles.avatar} />
        </Animated.View>
      ) : (
        <Text style={styles.loading}>캐릭터 불러오는 중...</Text>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 40,
  },
  avatar: {
    marginTop: 20,
  },
  loading: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});