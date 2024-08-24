import React, {FC} from 'react';
import {Text, TextProps} from 'react-native';

import {styled} from 'nativewind';

interface IProps extends TextProps {
  className?: string;
}

const StyledText = styled(Text);

const AppText: FC<IProps> = ({children, className, ...props}) => {
  return (
    <StyledText
      className={`text-black text-base font-medium ${className}`}
      {...props}>
      {children}
    </StyledText>
  );
};

export default AppText;
