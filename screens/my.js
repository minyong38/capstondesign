// screens/my.js
import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { SvgUri } from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useState, useCallback } from 'react';

export default function MyScreen({ navigation }) {
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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>내 정보 페이지</Text>
      {avatarUrl ? (
        <SvgUri width="250" height="250" uri={avatarUrl} style={styles.avatar} />
      ) : (
        <Text>아바타 불러오는 중...</Text>
      )}
      <Button title="아바타 커스터마이징" onPress={() => navigation.navigate('AvatarCustomizer')} />
      <View style={styles.authButtons}>
        <Button title="회원가입" onPress={() => navigation.navigate('SignUp')} />
        <Button title="로그인" onPress={() => navigation.navigate('Login')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatar: {
    marginVertical: 30,
  },
  authButtons: {
    marginTop: 30,
    width: '80%',
    gap: 10,
  },
});
