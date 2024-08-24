import React, {FC} from 'react';

import AppText from '@/components/atoms/appText/appText';
import AppView from '@/components/atoms/appView/appView';
import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';
import AppButton from '@/components/molecules/appButton/appButton';

interface IProps {
  text: string;
  onPress: () => void;
}

const RowTextAndSeeAllButton: FC<IProps> = ({text, onPress}) => {
  return (
    <AppView className="flex-row justify-between items-center mb-3">
      <AppText className="font-bold text-2xl capitalize">{text}</AppText>
      <AppButton
        inline
        onPress={onPress}
        className="flex-row items-center justify-end gap-3">
        <AppText className="text-darkGray text-lg">See all</AppText>
        <AppView className="bg-lightGray w-fit p-2 rounded-full items-center justify-center">
          <TabBarIcon name={'chevron-forward-outline'} size={20} />
        </AppView>
      </AppButton>
    </AppView>
  );
};

export default RowTextAndSeeAllButton;
