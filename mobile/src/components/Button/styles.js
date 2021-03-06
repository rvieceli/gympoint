import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

export const Container = styled(BaseButton)`
  height: 45px;
  background: #ee4e62;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;
