import React from 'react';
import { Text } from 'react-native';

const ProfileScreen = ({ route }) => {
  // Ensure that route.params.name is available before trying to access it
  const name = route.params?.name || 'Unknown';

  return <Text>This is {name}'s profile</Text>;
};

export default ProfileScreen;
