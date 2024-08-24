import React, {FC, JSX, isValidElement} from 'react';

import AppText from '@/components/atoms/appText/appText';
import AppView from '@/components/atoms/appView/appView';
import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';

import AppButton from '../appButton/appButton';

interface IProps {
  title: string | JSX.Element;
  isChecked?: boolean;
  onPress: () => void;
  className?: string;
  disabled?: boolean;
}

const AppCheckBox: FC<IProps> = ({
  title,
  isChecked = false,
  onPress,
  className,
  disabled,
}) => {
  return (
    <AppView className={`flex-row items-center gap-5 ${className}`}>
      <AppButton
        disabled={disabled}
        onPress={onPress}
        inline
        className={`w-6 h-6 rounded-lg ${isChecked ? 'bg-lightGreen' : ''} border-2 border-lightGreen justify-center items-center`}>
        {isChecked ? (
          <TabBarIcon
            name={'checkmark-sharp'}
            size={17}
            className="text-white"
          />
        ) : null}
      </AppButton>

      {isValidElement(title) ? title : <AppText>{title}</AppText>}
    </AppView>
  );
};

export default AppCheckBox;
