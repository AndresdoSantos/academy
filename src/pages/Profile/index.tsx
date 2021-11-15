import {
  Entypo,
  Feather,
  Ionicons,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import React, { useMemo } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import {
  ProfileJoinedWrapper,
  ProfileContainer,
  ProfileHeaderWrapper,
  ProfileImageAndJoinedWrapper,
  ProfileJoinedLine,
  ProfileImageWrapper,
  ProfileNameWrapper,
  ProfileOptionsWrapper,
  ProfileOptionWrapper,
  ProfileOptionLeftContent,
  ProfileOptionIconLeftWrapper,
  ProfileOptionText,
  ProfileOptionIconRightWrapper,
  SignOutButtonWrapper,
} from './styles';

import profileImg from '../../../assets/people.jpeg';
import { useNavigation } from '@react-navigation/core';

type Options = 'Metas' | 'Meu Corpo' | 'Configurações';

export function Profile(): JSX.Element {
  const { goBack, navigate } = useNavigation();

  const options = useMemo(
    (): Options[] => ['Metas', 'Meu Corpo', 'Configurações'],
    []
  );

  return (
    <ProfileContainer>
      <ProfileHeaderWrapper>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
        <Entypo name="dots-two-horizontal" size={20} color="black" />
      </ProfileHeaderWrapper>

      <ProfileImageAndJoinedWrapper>
        <ProfileImageWrapper>
          <Image
            source={profileImg}
            style={{ width: 100, height: 100, borderRadius: 100 }}
          />
        </ProfileImageWrapper>

        <ProfileJoinedWrapper>
          <ProfileJoinedLine />
          <View>
            <Text style={{ color: '#9CA3AF', fontSize: 13 }}>Ingressou à</Text>
            <Text style={{ fontWeight: '700', fontSize: 16 }}>
              6 meses atrás
            </Text>
          </View>
        </ProfileJoinedWrapper>
      </ProfileImageAndJoinedWrapper>

      <ProfileNameWrapper>
        <Text style={{ fontWeight: '700', fontSize: 30, color: 'black' }}>
          Andres
        </Text>
        <Text style={{ color: '#9CA3AF', fontWeight: '500', fontSize: 30 }}>
          dos Santos
        </Text>
      </ProfileNameWrapper>

      <FlatList
        data={options}
        keyExtractor={(option) => option}
        renderItem={({ item }) => (
          <ProfileOptionsWrapper>
            <ProfileOptionWrapper>
              <ProfileOptionLeftContent>
                <ProfileOptionIconLeftWrapper item={item}>
                  {item === 'Metas' && (
                    <Feather name="target" size={24} color="#fe6b01" />
                  )}

                  {item !== 'Metas' && (
                    <Ionicons
                      name={
                        item === 'Meu Corpo' ? 'ios-body' : 'settings-sharp'
                      }
                      size={24}
                      color={item === 'Meu Corpo' ? '#551DFE' : '#04A2EE'}
                    />
                  )}
                </ProfileOptionIconLeftWrapper>
                <ProfileOptionText>{item}</ProfileOptionText>
              </ProfileOptionLeftContent>

              <ProfileOptionIconRightWrapper
                onPress={() => {
                  if (item === 'Metas') navigate('Goal');

                  if (item === 'Meu Corpo') navigate('Body');

                  if (item === 'Configurações') navigate('Settings');
                }}
              >
                <Ionicons name="chevron-forward" size={20} color="#4b5563" />
              </ProfileOptionIconRightWrapper>
            </ProfileOptionWrapper>
          </ProfileOptionsWrapper>
        )}
      />

      <SignOutButtonWrapper>
        <Octicons name="sign-in" size={24} color="#FB5278" />
        <Text style={{ fontWeight: '700', color: '#4B5563' }}>Sair</Text>
      </SignOutButtonWrapper>
    </ProfileContainer>
  );
}
