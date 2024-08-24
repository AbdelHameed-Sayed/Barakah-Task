import React, {FC} from 'react';
import {Animated} from 'react-native';

import {styled} from 'nativewind';

import AppView from '@/components/atoms/appView/appView';

const AnimatedAppView = styled(Animated.View);

interface IProps {
  count: number;
}

const LoadingCategoryProductsListComponent: FC<IProps> = ({count}) => {
  const pulse = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(pulse, {
        toValue: 1.05,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(pulse, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]),
  ).start();

  const animatedStyle = {
    transform: [{scale: pulse}],
  };

  return (
    <AppView className="flex-row justify-between mt-5 ">
      {[...Array(count)].map((_, index) => (
        <AnimatedAppView
          key={index}
          style={animatedStyle}
          className="bg-lightGray h-48 w-48 rounded-xl justify-center items-center p-10 mr-7"
        />
      ))}
    </AppView>
  );
};

export default LoadingCategoryProductsListComponent;
