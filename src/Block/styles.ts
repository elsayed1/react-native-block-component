
import { StyleSheet } from 'react-native';

export const styles = theme =>
  StyleSheet.create({
    block: {
      flexDirection: 'column',
    },
    row: {
      flexDirection: 'row',
    },
    middle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    center: {
      alignItems: 'center',
      alignSelf: 'center',
    },
    left: {
      alignItems: 'flex-start',
    },
    right: {
      alignItems: 'flex-end',
    },
    top: {
      alignItems: 'flex-start',
      alignSelf: 'flex-start',
    },
    bottom: {
      alignItems: 'flex-end',
      alignSelf: 'flex-end',
    },
    card: {
      borderRadius: theme.borderRadius,
      borderWidth: theme.borderWidth,
      borderColor: theme.colors.black_two,
    },
    shadow: {
      shadowColor: theme.colors.black_two,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    fluid: {
      width: 'auto',
    },
  });