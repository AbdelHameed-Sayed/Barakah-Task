import React, {useCallback, useState} from 'react';

import AppFlatList from '@/components/atoms/appFlatList/appFlatList';
import AppImage from '@/components/atoms/appImage/appImage';
import AppText from '@/components/atoms/appText/appText';
import AppView from '@/components/atoms/appView/appView';
import ItemSeparator from '@/components/atoms/itemSeperatot/itemSeperatot';
import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';
import AppButton from '@/components/molecules/appButton/appButton';
import AppCheckBox from '@/components/molecules/appCheckBox/appCheckBox';
import CartCountAddRemove from '@/components/molecules/cartCountAddRemove/cartCountAddRemove';
import Header from '@/components/molecules/header/header';
import {useAppDispatch, useAppSelector} from '@/store';
import {addToCart, removeFromCart} from '@/store/slices/userSlice/user';

const Cart = () => {
  const dispatch = useAppDispatch();

  const {cart: cartData, currency: userCurrency} = useAppSelector(s => s.user);

  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState<{[key: string]: boolean}>(
    cartData.reduce((acc, item) => ({...acc, [item.id]: false}), {}),
  );

  const handleSelectAll = () => {
    setSelectAll(prev => {
      const newSelectAll = !prev;
      setSelectedItems(
        cartData.reduce((acc, item) => ({...acc, [item.id]: newSelectAll}), {}),
      );
      return newSelectAll;
    });
  };

  const handleItemPress = useCallback((id: string) => {
    setSelectedItems(prev => {
      const newState = {...prev, [id]: !prev[id]};
      const allSelected = Object.values(newState).every(Boolean);
      setSelectAll(allSelected);
      return newState;
    });
  }, []);

  return (
    <AppView className="flex-1 bg-lightGray gap-3">
      <AppView className="bg-white rounded-b-3xl">
        <Header
          title="Cart"
          containerClassName="m-5 mb-0"
          rightElement={{
            type: 'customOne',
            onPress() {},
            buttonClassName: 'bg-lightGray',
            customElement: <TabBarIcon name={'cog'} size={30} />,
          }}
          leftElement={{type: 'hide'}}
          titleStart
          titleClassName="text-3xl font-bold"
        />

        <AppView className="bg-lightGray rounded-xl p-3 flex-row items-center justify-between m-5">
          <AppView className="flex-row items-center">
            <TabBarIcon
              name={'location-outline'}
              size={25}
              className="text-darkGray mr-2"
            />
            <AppText>92 High Street, London</AppText>
          </AppView>
          <TabBarIcon
            name={'chevron-forward-outline'}
            size={30}
            className="text-darkGray"
          />
        </AppView>
      </AppView>

      <AppView className="bg-white p-5 rounded-t-3xl flex-1 relative">
        <AppView className="flex-row justify-between">
          <AppCheckBox
            title={'Select all'}
            isChecked={selectAll}
            onPress={handleSelectAll}
            disabled={cartData.length < 1}
          />
          <AppView className="flex-row gap-3">
            <AppButton inline onPress={() => {}}>
              <TabBarIcon name={'share-outline'} size={25} />
            </AppButton>
            <AppButton inline onPress={() => {}}>
              <TabBarIcon name={'pencil-outline'} size={25} />
            </AppButton>
          </AppView>
        </AppView>

        <AppFlatList
          className="mt-7 mb-24"
          showsVerticalScrollIndicator={false}
          data={cartData}
          renderItem={({item}) => {
            return (
              <AppCheckBox
                title={
                  <AppView className="flex-row gap-3 flex-1">
                    <AppView className="bg-lightGray h-24 w-24 rounded-xl justify-center items-center p-5">
                      <AppImage
                        className="w-full h-full"
                        source={{
                          uri: item.image,
                        }}
                      />
                    </AppView>

                    <AppView className="justify-between flex-1">
                      <AppText>{item.title}</AppText>

                      <AppView className="flex-row justify-between">
                        <AppText>
                          {userCurrency}
                          {item.price}
                        </AppText>

                        <CartCountAddRemove
                          count={item.count}
                          onDecrement={() => {
                            dispatch(removeFromCart(item.id));
                          }}
                          onIncrement={() => {
                            dispatch(
                              addToCart({
                                ...item,
                                count: 1,
                              }),
                            );
                          }}
                        />
                      </AppView>
                    </AppView>
                  </AppView>
                }
                isChecked={selectedItems[item.id] || false}
                onPress={() => handleItemPress(item.id.toString())}
              />
            );
          }}
          ItemSeparatorComponent={ItemSeparator}
          ListEmptyComponent={
            <AppText className="text-center font-semibold text-lg mt-20">
              Your cart is empty
            </AppText>
          }
        />

        <AppButton
          title="Checkout"
          onPress={() => {}}
          className="my-5 bg-lemon absolute bottom-0 w-full self-center"
          titleClassName="text-black"
          disabled={cartData.length < 1}
        />
      </AppView>
    </AppView>
  );
};

export default Cart;
