import React, {FC} from 'react';

import {styled} from 'nativewind';
import Swiper, {SwiperProps} from 'react-native-swiper';

import AppImage from '@/components/atoms/appImage/appImage';
import AppView from '@/components/atoms/appView/appView';

interface IProps extends SwiperProps {
  data: {
    id: number;
    imageSource: string;
  }[];
  className?: string;
}

const StyledSwiper = styled(Swiper);

const AppSwiper: FC<IProps> = ({data, className, ...props}) => {
  return (
    <StyledSwiper
      className={className}
      loop={true}
      activeDotColor="#7c7d7f"
      {...props}>
      {data.map(item => (
        <AppView className="h-48 w-full px-5" key={item.id}>
          <AppImage
            source={{uri: item.imageSource}}
            className="w-full h-full"
          />
        </AppView>
      ))}
    </StyledSwiper>
  );
};

export default AppSwiper;
