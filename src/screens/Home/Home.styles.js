import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
  },
  headerText: {
    paddingHorizontal: spacing.xs,
  },
  subContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  submitButton: {
    marginTop: spacing.m,
    marginBottom: spacing.m,
  },
  pageHeader: {
    marginBottom: spacing.xs,
  },
  pageSubheader: {
    marginBottom: spacing.s,
  },
});
