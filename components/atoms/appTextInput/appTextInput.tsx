import React, {FC, useState} from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {styled} from 'nativewind';

import AppView from '../appView/appView';
import TabBarIcon from '../tabBarIcon/tabBarIcon';

const StyledTextInput = styled(TextInput);

interface IProps extends TextInputProps {
  containerClassName?: string;
  textInputClassName?: string;
}

const AppTextInput: FC<IProps> = ({
  containerClassName,
  textInputClassName,
  ...props
}) => {
  const [textVal, setTextVal] = useState('');

  return (
    <AppView className={`relative ${containerClassName}`}>
      <StyledTextInput
        className={`bg-lightGray rounded-xl p-3 ${textVal.length === 0 && 'text-center'} ${textInputClassName}`}
        onChangeText={text => {
          setTextVal(text);
        }}
        {...props}
      />
      {textVal.length === 0 ? (
        <TabBarIcon
          name={'search-outline'}
          size={30}
          className="text-darkGray absolute top-1/4 left-[50px]"
        />
      ) : null}
    </AppView>
  );
};

export default AppTextInput;
