// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import {FC, type ComponentProps} from 'react';

import {type IconProps} from '@expo/vector-icons/build/createIconSet';
import Ionicons from '@expo/vector-icons/Ionicons';

interface IProps extends IconProps<ComponentProps<typeof Ionicons>['name']> {
  className?: string;
}

const TabBarIcon: FC<IProps> = ({style, className, ...rest}) => {
  return (
    <Ionicons
      size={28}
      style={[{marginBottom: -3}, style]}
      className={className}
      {...rest}
    />
  );
};

export default TabBarIcon;
