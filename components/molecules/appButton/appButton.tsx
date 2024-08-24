import React, {FC, ReactNode} from 'react';
import {Pressable, PressableProps} from 'react-native';

import {styled} from 'nativewind';

import AppText from '@/components/atoms/appText/appText';

export interface IAppButtonProps extends PressableProps {
  onPress: () => void;
  title?: string;
  className?: string;
  titleClassName?: string;
  inline?: boolean;
  borderedTransparent?: boolean;
  children?: ReactNode;
}

const StyledPressable = styled(Pressable);

const AppButton: FC<IAppButtonProps> = ({
  onPress,
  title,
  className,
  titleClassName,
  inline,
  borderedTransparent,
  children,
  ...props
}) => {
  return (
    <StyledPressable
      onPress={onPress}
      className={`active:opacity-75 ${(!inline || borderedTransparent) && 'h-14 rounded-2xl bg-lightGray justify-center items-center'} ${borderedTransparent && 'bg-transparent border-[1px] border-lightGray'} ${props.disabled && 'opacity-50'} ${className}`}
      {...props}>
      {title && (
        <AppText
          className={`${inline ? 'text-darkGray' : 'text-darkGray text-lg font-semibold'} ${titleClassName}`}>
          {title}
        </AppText>
      )}
      {children}
    </StyledPressable>
  );
};

export default AppButton;
