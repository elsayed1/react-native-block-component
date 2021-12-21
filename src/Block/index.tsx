import   React,{FC} from "react";
import {  SafeAreaView, TouchableOpacity,ViewStyle,View } from "react-native";
import { styles as stylesFunc } from "./styles";
import   {Block as BlockType} from '../types';

const Block: FC<BlockType> = ({
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,

    wrap,
    space,
    alignContent,

    shadow,
    fluid,
    height,
    margin,
    padding,
    shadowColor,
    backgroundColor,
    card,
    width,
    safe,
    touchable,
    children,
    style,
    ...rest
}) =>{
    const isDirectionRow =row
    const styles = stylesFunc(isDirectionRow as boolean);

    const handelProp = (prop:string, value:number[]|number) => {
        if (typeof value === "number") {
            return {
                [prop]: value,
            };
        }
        const getStyle = (values:number[]) => ({
            [`${prop}Top`]: values[0] || 0,
            [`${prop}Right`]: values[1] || 0,
            [`${prop}Bottom`]: values[2] || value[0] || 0,
            [`${prop}Left`]: values[3] || values[1] || 0,
        });
        if (Array.isArray(value)) {
            return getStyle(value);
        }
        return 0;
    };

    const styleBlock:ViewStyle[]= [    
        styles.block,
        row && styles.row,
        flex && { flex: flex === true ? 1 : flex },
        center && styles.center,
        middle && styles.middle,
        top && styles.top,
        bottom && styles.bottom,
        right && styles.right,
        left && styles.left,

        space && { justifyContent: `space-${space}` },
        wrap && {flexWrap:wrap},
        alignContent && {alignContent},

        shadow && styles.shadow,
        fluid && styles.fluid,
        card && styles.card,
        height && { height },
        width && { width },
        margin && { ...handelProp("margin", margin) },
        padding && { ...handelProp("padding", padding) },
        shadowColor && { shadowColor },
        backgroundColor && { backgroundColor },
        style,
    ];
    if(safe && touchable)
    throw new Error("can't use safe and touchable together")
    if (safe) {
        return <SafeAreaView style= { styleBlock } {...rest }>{ children }</SafeAreaView>
    }
    if (touchable) {
        return  <TouchableOpacity  style= { styleBlock } {...rest } >{ children }</TouchableOpacity>
    
    }
    return (
        <View  style= { styleBlock } {...rest }>{ children }</View>
  );
}

Block.defaultProps = {
    row: false,
    flex: false,
    center: false,
    middle: false,
    top: false,
    bottom: false,
    right: false,
    left: false,

    wrap:undefined,
    alignContent:undefined,
    space: undefined,

    card: false,
    shadow: false,
    fluid: false,
    height: undefined,
    width: undefined,
    shadowColor: '',
    backgroundColor: '',
    safe: false,
    touchable: false,
    margin: 0,
    padding: 0,
    style: {},
    children: null,
};

export default Block;
