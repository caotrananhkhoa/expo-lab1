import { View, Image } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function EmojiSticker({ imageSize, stickerSource }) {
  // "useSharedValue" is similar to "useState",
  // but it does not trigger a re-render when the value is updated
  const scaleImage = useSharedValue(imageSize);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // "doubleTap" object will use the Gesture.Tap() to animate
  // the transition while scaling the sticker image.
  // The numberOfTaps method determines how many taps are required.
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart(() => {
      if (scaleImage.value !== imageSize * 2) {
        scaleImage.value = imageSize * 2;
      } else {
        scaleImage.value = imageSize;
      }
    });

  // The onChange() callback accepts event as a parameter.
  // changeX and changeY properties hold the change
  // in position since the last event.
  const drag = Gesture.Pan().onChange((event) => {
    translateX.value = translateX.value + event.changeX;
    translateY.value = translateY.value + event.changeY;
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureDetector gesture={drag}>
      <Animated.View style={[containerStyle, { top: -350 }]}>
        <GestureDetector gesture={doubleTap}>
          <Animated.Image
            source={stickerSource}
            resizeMode="contain"
            style={[imageStyle, { width: imageSize, height: imageSize }]}
          />
        </GestureDetector>
      </Animated.View>
    </GestureDetector>
  );
}
