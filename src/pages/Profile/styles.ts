import styled from 'styled-components/native';

export const ProfileContainer = styled.View`
  padding: 40px 30px;
`;

export const ProfileHeaderWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

export const ProfileImageAndJoinedWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 70px;
`;

export const ProfileImageWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 110px;
  border-radius: 110px;
  border-width: 2px;
  border-color: #5bd2bb;
`;

export const ProfileJoinedWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ProfileJoinedLine = styled.View`
  width: 1px;
  background-color: #9ca3af;
  height: 50px;
  margin-right: 20px;
`;

export const ProfileNameWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 50px;
`;

export const ProfileOptionsWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const ProfileOptionWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileOptionLeftContent = styled.View`
  flex: 1;
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

type ProfileOptionIconLeftWrapperProps = {
  item: 'Metas' | 'Meu Corpo' | 'Configurações';
};

export const ProfileOptionIconLeftWrapper = styled.View<ProfileOptionIconLeftWrapperProps>`
  width: 60px;
  height: 60px;
  border-radius: 60px;
  background-color: ${(props) =>
    props.item === 'Metas'
      ? '#fff0e5'
      : props.item === 'Meu Corpo'
      ? '#ECEAFF'
      : '#E4F7FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

export const ProfileOptionText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #374151;
`;

export const ProfileOptionIconRightWrapper = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 20px;
  background-color: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignOutButtonWrapper = styled.TouchableOpacity`
  height: 50px;
  width: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f7;
  border-radius: 10px;
  margin-top: 40px;
  padding: 0 10px;
`;
