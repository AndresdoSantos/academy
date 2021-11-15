import React, { ReactNode, useMemo, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import {
  SettingOptionIconWrapper,
  SettingOptionLeftContent,
  SettingOptionWrapper,
  SettingsButtonNavigateOtherTab,
  SettingsContainer,
  SettingsHeaderWrapper,
  SettingsSubtitle,
  SettingsSubtitleWrapper,
  SettingsTitle,
} from './styles';

type SettingsOptions = {
  id: number;
  name: 'Change theme' | 'Pagamentos' | 'Conquistas';
  icon: ReactNode;
  color: '#fff' | '#000' | '#e3fcec' | '#fff7e0';
};

export function Settings(): JSX.Element {
  const { goBack, navigate } = useNavigation();

  const [isDark, setIsDark] = useState(false);

  const settingsOptions = useMemo(
    (): SettingsOptions[] => [
      {
        id: 1,
        name: 'Pagamentos',
        icon: <Ionicons name="md-wallet" size={24} color="#59BD7D" />,
        color: '#e3fcec',
      },
      {
        id: 2,
        name: 'Conquistas',
        icon: <Ionicons name="star" size={24} color="#ffd237" />,
        color: '#fff7e0',
      },
    ],
    []
  );

  return (
    <SettingsContainer>
      <SettingsHeaderWrapper>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
      </SettingsHeaderWrapper>

      <SettingsTitle>Configurações</SettingsTitle>

      <SettingsSubtitleWrapper>
        <SettingsSubtitle>Pagamentos e conquistas</SettingsSubtitle>
      </SettingsSubtitleWrapper>

      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SettingOptionWrapper>
            <SettingOptionLeftContent>
              <SettingOptionIconWrapper item={item.color}>
                {item.icon}
              </SettingOptionIconWrapper>
              <Text
                style={{ fontSize: 20, fontWeight: '700', color: '#374151' }}
              >
                {item.name}
              </Text>
            </SettingOptionLeftContent>

            <SettingsButtonNavigateOtherTab
              onPress={() => {
                if (item.name === 'Pagamentos') navigate('Payments');
              }}
            >
              <Ionicons name="chevron-forward" size={20} color="#4b5563" />
            </SettingsButtonNavigateOtherTab>
          </SettingOptionWrapper>
        )}
      />

      <SettingsSubtitleWrapper>
        <SettingsSubtitle>Temas e política de uso</SettingsSubtitle>
      </SettingsSubtitleWrapper>
    </SettingsContainer>
  );
}
