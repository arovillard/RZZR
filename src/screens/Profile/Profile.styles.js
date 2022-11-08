import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: spacing.s,
  },
  profileContent: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  leftContent: {
    width: '50%',
  },
  rightContent: {
    width: '50%',
    alignItems: 'flex-end',
  },
  textContent: {
    marginBottom: spacing.s,
  },
});
