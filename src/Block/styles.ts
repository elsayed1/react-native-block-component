
import { StyleSheet } from 'react-native';

export const styles = (isDirectionRow:boolean) =>{
  const alignX  =isDirectionRow ?'justifyContent' : 'alignItems';
  const alignY = isDirectionRow ?'alignItems' : 'justifyContent';
 return  StyleSheet.create({
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
      justifyContent:'center',
    },
    left: {
      [alignX]: 'flex-start',
    },
    right: {
      [alignX]: 'flex-end',
    },
    top: {
      [alignY]:'flex-start'
    },
    bottom: {
      [alignY]:'flex-end',
    },
    card: {
      borderRadius: 5,
      borderWidth: 1,
      borderColor: 'black',
    },
    shadow: {
      shadowColor: 'black',
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
}
  