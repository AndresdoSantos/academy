import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const WelcomeMessageWrapper = styled.View``;

export const ProfileWrapper = styled.TouchableOpacity`
  height: 45px;
  width: 45px;
  border-radius: 45px;
  background-color: #5bd2bb;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  position: absolute;
  right: 10px;
`;

export const AnimatedHeaderWrapper = styled.View`
  width: 100%;
  height: 80px;
  background-color: #f2f2f2;
  border-radius: 15px;
  padding: 20px;
`;

export const ButtonProfile = styled.TouchableOpacity`
  height: 80px;
  width: 40px;
  border-radius: 45px;
  background-color: #5bd2bb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonProfileText = styled.Text`
  color: #fff;
  transform: rotate(270deg);
`;

export const ImageProfile = styled.Image`
  width: 43px;
  height: 43px;
  border-radius: 43px;
`;
