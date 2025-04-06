// screens/actions.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ActionsScreen() {
  const handleExtraAction = () => {
    alert('추가 행동 버튼이 눌렸습니다');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>행동 관리 페이지</Text>
      <TouchableOpacity style={styles.bottomButton} onPress={handleExtraAction}>
        <Text style={styles.bottomButtonText}>추가 행동</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 100,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  bottomButton: {
    position: 'absolute',
    bottom: 40,
    backgroundColor: '#4F8EF7',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
  },
  bottomButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
