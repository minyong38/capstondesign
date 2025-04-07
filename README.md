# Capstone Design Project

이 프로젝트는 캡스톤 디자인 수업의 일환으로 제작된 모바일 애플리케이션입니다.  
Expo 기반의 React Native 앱으로, 사용자 인터페이스와 기능 구현을 목표로 합니다.

---

## 🚀 사용 기술 스택

- React Native (`react-native: 0.76.7`)  
  → JavaScript와 React를 기반으로 한 모바일 앱 프레임워크. iOS와 Android 앱을 동시에 개발할 수 있습니다.

- Expo (`~52.0.41`)  
  → React Native 앱을 더 쉽게 만들고 테스트할 수 있도록 도와주는 도구 및 플랫폼입니다. 빌드, 배포, 디버깅이 매우 간편합니다.

- React Navigation
  → 앱 내에서 여러 화면 간 이동(네비게이션)을 처리하기 위한 라이브러리. Stack, Tab, Drawer 등 다양한 방식 지원.

- Async Storage
  → 사용자의 로컬 기기에 데이터를 저장할 수 있는 비동기 Key-Value 스토리지. 로그인 정보, 설정값 등을 저장할 때 사용합니다.

- React Native SVG 
  → SVG 형식의 벡터 이미지를 앱에서 사용 가능하게 해주는 라이브러리입니다. 아이콘, 일러스트 등을 선명하게 표현할 수 있어요.

- Avataaars 기반 아바타 생성기  
  → 사용자 맞춤형 아바타를 생성할 수 있는 그래픽 도구입니다. 외모 선택을 통해 개성 있는 캐릭터를 만들 수 있어요.


---

npm install @react-navigation/native-stack \
npm install @react-navigation/bottom-tabs \
npm install @react-native-async-storage/async-storage \
npm install react-native-svg \
npm install react-native-reanimated \
npm install expo-linear-gradient \
npm install react-native-safe-area-context \
npm install react-native-gesture-handler
npx expo install @ui-kitten/components @eva-design/eva

            
위 명령어는 expo install 대신 일반 npm install로도 동작하지만, Expo 사용자라면 expo install 사용을 권장합니다.
