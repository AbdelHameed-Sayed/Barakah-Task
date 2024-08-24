import React, {FC} from 'react';
import {Image, ImageProps} from 'react-native';

import {styled} from 'nativewind';

const StyledImage = styled(Image);

interface IProps extends ImageProps {
  className?: string;
}

const AppImage: FC<IProps> = ({className, ...props}) => {
  return <StyledImage className={className} {...props} />;
};

export default AppImage;
