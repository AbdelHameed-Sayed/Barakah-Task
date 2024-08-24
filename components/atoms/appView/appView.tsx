import React, {FC} from 'react';
import {View, ViewProps} from 'react-native';

import {styled} from 'nativewind';

const StyledView = styled(View);

interface IProps extends ViewProps {
  className?: string;
}

const AppView: FC<IProps> = ({className, ...props}) => {
  return <StyledView className={className} {...props} />;
};

export default AppView;
