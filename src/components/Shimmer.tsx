import React, { useEffect } from "react";
import { StyleSheet, View, ViewProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

interface ShimmerProps extends ViewProps {
  width?: number | string;
  height?: number | string;
  borderRadius?: number;
  className?: string;
}

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const Shimmer = ({
  width = "100%",
  height = "100%",
  borderRadius = 0,
  style,
  className,
  ...props
}: ShimmerProps) => {
  const translateX = useSharedValue(-1);

  useEffect(() => {
    translateX.value = withRepeat(
      withTiming(1, { duration: 1000 }),
      -1,
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(translateX.value, [-1, 1], [-200, 200]),
        },
      ],
    };
  });

  return (
    <View
      style={[
        {
          width: width as any,
          height: height as any,
          borderRadius,
          backgroundColor: "#E1E9EE",
          overflow: "hidden",
        },
        style,
      ]}
      className={className}
      {...props}
    >
      <AnimatedLinearGradient
        colors={["#E1E9EE", "#F2F8FC", "#E1E9EE"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[StyleSheet.absoluteFill, animatedStyle]}
      />
    </View>
  );
};
