import React from "react";
import { View, SafeAreaView, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
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
        return  <TouchableOpacity style= { styleBlock } {...rest } > { children }</TouchableOpacity>
    
    }
    return (
        <View style= { styleBlock } {...rest }>{ children } </View>
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
    space: null,
    fluid: false,
    height: null,
    width: null,
    shadowColor: null,
    backgroundColor: null,
    safe: false,
    touchable: false,
    margin: 0,
    padding: 0,
    style: {},
    children: null,
};

Block.propTypes = {
    row: PropTypes.bool,
    flex: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    center: PropTypes.bool,
    middle: PropTypes.bool,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    right: PropTypes.bool,
    card: PropTypes.bool,
    left: PropTypes.bool,
    shadow: PropTypes.bool,
    space: PropTypes.string,
    fluid: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    shadowColor: PropTypes.string,  
    backgroundColor: PropTypes.string,
    safe: PropTypes.bool,
    touchable: PropTypes.bool,
    theme: PropTypes.shape({}).isRequired,
    style: PropTypes.shape({}),
    padding: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    margin: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    children: PropTypes.node,
};

export default Block;
