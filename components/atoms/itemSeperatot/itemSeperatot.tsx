import React, {FC} from 'react';

import AppView from '../appView/appView';

interface IProps {
  className?: string;
}

const ItemSeparator: FC<IProps> = ({className}) => (
  <AppView
    className={`border-b-2 border-lightGray my-7 w-1/2 self-end ${className}`}
  />
);

export default ItemSeparator;
