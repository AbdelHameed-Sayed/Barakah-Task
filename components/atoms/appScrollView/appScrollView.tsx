import React, {FC} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

import {styled} from 'nativewind';

const StyledScrollView = styled(ScrollView);

interface IProps extends ScrollViewProps {
  className?: string;
}
const AppScrollView: FC<IProps> = ({className, ...props}) => {
  return <StyledScrollView className={className} {...props} />;
};

export default AppScrollView;
