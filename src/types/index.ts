import {TouchableOpacityProps} from 'react-native'

interface  Block extends TouchableOpacityProps {
    row?: boolean;
    flex?: boolean | number;
    center?: boolean;
    middle?: boolean;
    top?: boolean;
    bottom?: boolean;
    right?: boolean;
    left?: boolean;
  
    space?: "between" | "evenly" | "around";
    wrap?: "wrap" | "nowrap" | '"wrap-reverse"';
    alignContent?: "center" | "flex-start" | "flex-end";
    shadow?: boolean;
    fluid?: boolean;
    height?: number;
    margin?: number |number[];
    padding?: number | number[];
    shadowColor?: string;
    backgroundColor?: string;
    card?: boolean;
    width?: number;
    safe?: boolean;
    touchable?: boolean;
    children?: any;
    style?: any;
  };

export type {Block}