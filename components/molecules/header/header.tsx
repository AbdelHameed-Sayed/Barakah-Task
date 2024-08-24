import React, {FC, JSX} from 'react';

import {router} from 'expo-router';

import AppText from '@/components/atoms/appText/appText';
import AppView from '@/components/atoms/appView/appView';
import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';

import AppButton from '../appButton/appButton';

export interface HeaderIprops {
  leftElement?: {
    type: 'back' | 'custom' | 'hide';
    onPress?: () => void;
    customElement?: JSX.Element;
    buttonClassName?: string;
    iconClassName?: string;
  };
  subTitle?: string;
  title?: string;
  titleStart?: boolean;
  titleClassName?: string;
  backArrowColor?: string;
  rightElement?: {
    type: 'customOne' | 'customMultiple' | 'hide';
    onPress?: () => void;
    customElement?: JSX.Element;
    buttonClassName?: string;
  };
  containerClassName?: string;
}

const Header: FC<HeaderIprops> = ({
  leftElement = {
    type: 'back',
  },
  subTitle,
  title,
  titleStart,
  titleClassName,
  rightElement = {
    type: 'hide',
    onPress: () => {
      return;
    },
  },
  containerClassName,
}) => {
  const leftElementRenderingHandler = () => {
    if (leftElement?.type !== 'hide') {
      if (leftElement?.type === 'back') {
        return (
          <AppButton
            hitSlop={{
              bottom: 5,
              left: 5,
              right: 5,
              top: 5,
            }}
            inline
            className={`z-10 rounded-full p-3 bg-white ${leftElement?.buttonClassName}`}
            onPress={
              leftElement?.onPress ??
              (() => {
                router.back();
              })
            }>
            <TabBarIcon
              name={'chevron-back'}
              className={leftElement?.iconClassName}
              size={30}
            />
          </AppButton>
        );
      } else {
        return (
          <AppButton
            onPress={() => {
              leftElement.onPress?.();
            }}
            inline
            className={`z-10 rounded-full p-3 bg-white ${leftElement?.buttonClassName}`}>
            {leftElement?.customElement}
          </AppButton>
        );
      }
    } else {
      return <AppView className={`${!titleStart && 'flex-[0.75]'}`} />;
    }
  };

  const rightElementRenderingHandler = () => {
    if (rightElement?.type !== 'hide') {
      if (rightElement.type === 'customOne') {
        return (
          <AppButton
            onPress={() => {
              rightElement.onPress?.();
            }}
            inline
            className={`z-10 rounded-full p-3 bg-white ${rightElement?.buttonClassName}`}>
            {rightElement.customElement}
          </AppButton>
        );
      } else {
        return rightElement.customElement;
      }
    } else {
      return <AppView className={`${!titleStart && 'flex-[0.75]'}`} />;
    }
  };

  return (
    <AppView
      className={`h-16 flex-row justify-between items-center ${containerClassName}`}>
      {leftElementRenderingHandler()}

      <AppView className="flex-1 flex flex-col">
        <AppText className="text-center text-sm text-darkGray">
          {subTitle}
        </AppText>
        <AppText
          className={`${titleStart ? 'text-start self-center' : 'text-center '}text-lg font-semibold text-black ${titleClassName} `}>
          {title}
        </AppText>
      </AppView>

      {rightElementRenderingHandler()}
    </AppView>
  );
};

export default Header;
