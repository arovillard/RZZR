import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.l,
    paddingTop: spacing.xl,
  },
  submitButton: {
    position: 'absolute',
    bottom: 0,
    marginBottom: spacing.m,
  },
});
