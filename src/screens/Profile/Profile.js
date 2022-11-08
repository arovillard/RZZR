import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { typography } from '@/theme';

export function Profile() {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <View style={[styles.profileContent, typography.error]}>
        <View style={styles.leftContent}>
          <Text style={[styles.textContent, { color: colors.darkGrey }]}>
            {strings.profile.labelPhoneNumber}
          </Text>
          <Text style={[styles.textContent, { color: colors.darkGrey }]}>
            {strings.profile.labelEmail}
          </Text>
          <Text style={[styles.textContent, { color: colors.darkGrey }]}>
            {strings.profile.labelAffiliation}
          </Text>
        </View>
        <View style={[styles.rightContent]}>
          <Text style={styles.textContent}>(123) 456 7890</Text>
          <Text style={styles.textContent}>agent@razor.com</Text>
          <Text style={styles.textContent}>OEM Name</Text>
        </View>
      </View>

      <View style={typography.label}>
        <Text style={[styles.textContent, { color: colors.darkGrey }]}>
          {strings.profile.message}
        </Text>
        <Text style={[styles.textContent, { color: colors.secondary, fontWeight: 'bold' }]}>
          {strings.profile.customerCareEmailAddress}
        </Text>
        <Text style={[styles.textContent, { color: colors.secondary, fontWeight: 'bold' }]}>
          {strings.profile.customerCarePhoneNumber}
        </Text>
        <Button title={strings.profile.logout} onPress={logoutUser} />
      </View>
    </View>
  );
}
