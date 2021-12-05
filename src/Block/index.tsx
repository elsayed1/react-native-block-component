import * as  React from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import { styles as stylesFunc } from "./styles";

function Block({
    row,
    flex,
    center,
    middle,
    top,
    bottom,
    right,
    left,
    shadow,
    space,
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
    theme,
    ...rest
}) {
    const styles = stylesFunc(theme);

    const handelProp = (prop, value) => {
        if (typeof value === "number") {
            return {
                [prop]: value,
            };
        }
        const getStyle = (values) => ({
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

    const styleBlock = [
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

    if (safe) {
        return <SafeAreaView style= { styleBlock } {...rest }>{ children }</SafeAreaView>
    }
    if (touchable) {
        return  <TouchableOpacity style= { styleBlock } {...rest } >{ children }</TouchableOpacity>
    
    }
    return (
        <View style= { styleBlock } {...rest }>{ children }</View>
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
    card: false,
    shadow: false,
    space: false,
    fluid: false,
    height: false,
    width: false,
    shadowColor: false,
    backgroundColor: false,
    safe: false,
    touchable: false,
    margin: 0,
    padding: 0,
    style: {},
    children: null,
};

export default Block;
