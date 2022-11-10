import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { login, TYPES } from '@/actions/UserActions';
import { Button, ErrorView, TextField } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Login/Login.styles';
import { errorsSelector } from '@/selectors/ErrorSelectors';
import { isLoadingSelector } from '@/selectors/StatusSelectors';
import { shadow, spacing, typography } from '@/theme';
import { logo } from '@/assets';

export function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector((state) => errorsSelector([TYPES.LOGIN], state), shallowEqual);
  const isLoading = useSelector((state) => isLoadingSelector([TYPES.LOGIN], state));
  const { colors } = useTheme();

  const handleSubmit = () => {
    dispatch(login(username, password));
  };

  const loginStyles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: colors.white,
    },
    imageContainer: {
      width: '75%',
      marginBottom: 80,
    },
    image: {
      resizeMode: 'contain',
      maxWidth: '100%',
    },
    footer: {
      marginTop: 'auto',
      alignItems: 'center',
      marginBottom: spacing.xl,
    },
  });

  return (
    <View style={loginStyles.wrapper}>
      <View style={[styles.container, { backgroundColor: colors.white }]}>
        <View style={loginStyles.imageContainer}>
          <Image accessibilityIgnoresInvertColors style={loginStyles.image} source={logo} />
        </View>
        <View style={[styles.formContainer, shadow.primary]}>
          <TextField
            autoCapitalize="none"
            accessibilityHint={strings.login.usernameHint}
            accessibilityLabel={strings.login.username}
            onChangeText={setUsername}
            placeholder={strings.login.username}
            value={username}
          />
          <TextField
            secureTextEntry
            accessibilityHint={strings.login.passwordHint}
            accessibilityLabel={strings.login.password}
            autoCapitalize="none"
            onChangeText={setPassword}
            placeholder={strings.login.password}
            textContentType="password"
            value={password}
          />
          <ErrorView errors={errors} />
          {isLoading ? (
            <ActivityIndicator style={{ marginTop: spacing.l }} />
          ) : (
            <Button
              onPress={handleSubmit}
              style={styles.submitButton}
              title={isLoading ? strings.common.loading : strings.login.button}
            />
          )}
        </View>
      </View>
      <View style={loginStyles.footer}>
        <Text style={[typography.text, { color: colors.textLight }]}>
          {'Trouble logging in? '}
          <Text style={[typography.text, { color: colors.secondary }]}>Contact Razor support</Text>
        </Text>
      </View>
    </View>
  );
}
