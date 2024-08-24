import React, {FC} from 'react';

import AppText from '@/components/atoms/appText/appText';
import AppView from '@/components/atoms/appView/appView';

import AppButton from '../appButton/appButton';

interface IProps {
  className?: string;
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const CartCountAddRemove: FC<IProps> = ({
  className = '',
  count,
  onIncrement,
  onDecrement,
}) => {
  return (
    <AppView className={`flex-row items-center gap-3 ${className}`}>
      <AppButton
        onPress={onDecrement}
        inline
        className="bg-lightGray w-7 h-7 rounded-full justify-center items-center">
        <AppText>-</AppText>
      </AppButton>
      <AppText className="text-sm">{count}</AppText>
      <AppButton
        onPress={onIncrement}
        inline
        className="bg-lightGray w-7 h-7 rounded-full justify-center items-center">
        <AppText>+</AppText>
      </AppButton>
    </AppView>
  );
};

export default CartCountAddRemove;
