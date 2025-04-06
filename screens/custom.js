// screens/custom.js
import React, { useState, useEffect } from 'react';
import { View, Button, StyleSheet, ScrollView, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SvgUri } from 'react-native-svg';

const avatarOptionsList = {
  topType: ['NoHair', 'ShortHairDreads01', 'LongHairMiaWallace'],
  accessoriesType: ['Blank', 'Sunglasses', 'Round'],
  hairColor: ['Brown', 'Black', 'Blonde'],
  facialHairType: ['Blank', 'BeardMedium', 'BeardLight'],
  facialHairColor: ['Auburn', 'Black', 'Blonde'],
  clotheType: ['Hoodie', 'ShirtCrewNeck', 'BlazerShirt'],
  clotheColor: ['Blue03', 'Red', 'Green'],
  eyeType: ['Default', 'Wink', 'Squint'],
  eyebrowType: ['Default', 'RaisedExcited', 'SadConcerned'],
  mouthType: ['Smile', 'Sad', 'Serious', 'Tongue'],
  skinColor: ['Light', 'Brown', 'DarkBrown'],
};

export default function AvatarCustomizer({ navigation }) {
  const [avatarOptions, setAvatarOptions] = useState(
    Object.fromEntries(Object.keys(avatarOptionsList).map(key => [key, avatarOptionsList[key][0]]))
  );

  useEffect(() => {
    const loadAvatar = async () => {
      const savedAvatar = await AsyncStorage.getItem('avatarSettings');
      if (savedAvatar) {
        setAvatarOptions(JSON.parse(savedAvatar));
      }
    };
    loadAvatar();
  }, []);

  const saveAvatar = async () => {
    await AsyncStorage.setItem('avatarSettings', JSON.stringify(avatarOptions));
    alert('아바타가 저장되었습니다!');
    navigation.goBack();
  };

  const randomizeAvatar = () => {
    setAvatarOptions(
      Object.fromEntries(
        Object.keys(avatarOptionsList).map(key => [
          key,
          avatarOptionsList[key][Math.floor(Math.random() * avatarOptionsList[key].length)]
        ])
      )
    );
  };

  const avatarUrl = `https://avataaars.io/?avatarStyle=Transparent&topType=${avatarOptions.topType}&accessoriesType=${avatarOptions.accessoriesType}&hairColor=${avatarOptions.hairColor}&facialHairType=${avatarOptions.facialHairType}&facialHairColor=${avatarOptions.facialHairColor}&clotheType=${avatarOptions.clotheType}&clotheColor=${avatarOptions.clotheColor}&eyeType=${avatarOptions.eyeType}&eyebrowType=${avatarOptions.eyebrowType}&mouthType=${avatarOptions.mouthType}&skinColor=${avatarOptions.skinColor}`;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SvgUri width="200" height="200" uri={avatarUrl} />

      {Object.keys(avatarOptionsList).map((optionKey) => (
        <View key={optionKey} style={styles.pickerContainer}>
          <Text style={styles.label}>{optionKey}</Text>
          <Picker
            selectedValue={avatarOptions[optionKey]}
            onValueChange={(value) => setAvatarOptions({ ...avatarOptions, [optionKey]: value })}
            style={styles.picker}>
            {avatarOptionsList[optionKey].map((value) => (
              <Picker.Item key={value} label={value} value={value} />
            ))}
          </Picker>
        </View>
      ))}

      <Button title="랜덤 아바타" onPress={randomizeAvatar} />
      <Button title="아바타 저장" onPress={saveAvatar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 20,
  },
  pickerContainer: {
    width: '80%',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  picker: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
