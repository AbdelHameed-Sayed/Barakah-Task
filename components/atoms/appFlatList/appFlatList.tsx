import React from 'react';
import {FlatList, FlatListProps, ListRenderItem} from 'react-native';

import {styled} from 'nativewind';

interface IProps<T> extends FlatListProps<T> {
  data: T[];
  // eslint-disable-next-line no-unused-vars
  renderItem: ({item, index}: {item: T; index: number}) => React.ReactElement;
  className?: string;
}

const AppFlatList = <T,>({
  data,
  renderItem,
  className,
  ...props
}: IProps<T>) => {
  const StyledFlatList = styled(FlatList<T>);

  return (
    <StyledFlatList
      className={className}
      data={data}
      renderItem={renderItem as ListRenderItem<T>}
      {...props}
    />
  );
};

export default AppFlatList;
