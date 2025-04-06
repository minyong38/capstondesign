// screens/home.js
import React, { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const [avatarUrl, setAvatarUrl] = useState('');

  useFocusEffect(
    useCallback(() => {
      const loadAvatar = async () => {
        const saved = await AsyncStorage.getItem('avatarSettings');
        if (saved) {
          const avatar = JSON.parse(saved);
          const url = `https://avataaars.io/?avatarStyle=Transparent&topType=${avatar.topType}&accessoriesType=${avatar.accessoriesType}&hairColor=${avatar.hairColor}&facialHairType=${avatar.facialHairType}&facialHairColor=${avatar.facialHairColor}&clotheType=${avatar.clotheType}&clotheColor=${avatar.clotheColor}&eyeType=${avatar.eyeType}&eyebrowType=${avatar.eyebrowType}&mouthType=${avatar.mouthType}&skinColor=${avatar.skinColor}`;
          setAvatarUrl(url);
        }
      };
      loadAvatar();
    }, [])
  );

  const handleCalendarPress = () => {
    alert('달력 페이지로 이동 예정');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.calendarButton} onPress={handleCalendarPress}>
        <Image
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747310.png' }}
          style={styles.calendarIcon}
        />
      </TouchableOpacity>
      {avatarUrl ? (
        <SvgUri width="250" height="250" uri={avatarUrl} style={styles.avatar} />
      ) : (
        <Text>아바타 불러오는 중...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  calendarButton: {
    position: 'absolute',
    top: 70,
    right: 20,
  },    
  calendarIcon: {
    width: 32,
    height: 32,
  },
  avatar: {
    marginTop: 200,
  },
});
