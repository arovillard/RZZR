import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.s,
  },
  formContainer: {
    width: '100%',
  },
  submitButton: {
    marginTop: spacing.m,
  },
});
