import React, {useState} from 'react';

import {router, useLocalSearchParams} from 'expo-router';

import AppScrollView from '@/components/atoms/appScrollView/appScrollView';
import AppText from '@/components/atoms/appText/appText';
import AppView from '@/components/atoms/appView/appView';
import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';
import AppButton from '@/components/molecules/appButton/appButton';
import Header from '@/components/molecules/header/header';
import AppSwiper from '@/components/organismas/appSwiper/appSwiper';
import {TCategoryProduct} from '@/network/types';
import {useAppDispatch, useAppSelector} from '@/store';
import {addToCart} from '@/store/slices/userSlice/user';

const ProductDetail = () => {
  const params = useLocalSearchParams<TCategoryProduct>();
  const dispatch = useAppDispatch();

  const userCurrency = useAppSelector(s => s.user.currency);

  const [readMore, setReadMore] = useState(false);

  return (
    <AppView className="flex-1 bg-lightGray">
      <Header
        containerClassName="m-5 mb-0"
        rightElement={{
          type: 'customMultiple',
          onPress() {},
          customElement: (
            <AppView className="flex-row gap-3">
              <AppButton
                onPress={() => {}}
                className="z-10 rounded-full p-3 bg-white">
                <TabBarIcon name={'heart'} size={30} className="text-red" />
              </AppButton>
              <AppButton
                onPress={() => {}}
                className="z-10 rounded-full p-3 bg-white">
                <TabBarIcon name={'share-outline'} size={30} />
              </AppButton>
            </AppView>
          ),
        }}
      />

      <AppView className="h-72 mt-10">
        <AppSwiper
          data={[
            {
              id: 1,
              imageSource: params.image,
            },
            {
              id: 2,
              imageSource: params.image,
            },
            {
              id: 3,
              imageSource: params.image,
            },
            {
              id: 4,
              imageSource: params.image,
            },
          ]}
        />
      </AppView>

      <AppScrollView
        className="bg-white h-full rounded-t-xl px-5"
        showsVerticalScrollIndicator={false}>
        <AppText className="text-2xl font-bold mt-7 mb-3">
          {params.title}
        </AppText>

        <AppView className="flex-row gap-2">
          <AppView className="flex-row pr-3 pb-2 gap-3 border rounded-xl border-darkGray content-center w-fit">
            <TabBarIcon name={'star'} className="text-lightGreen" size={20} />
            <AppText className="font-bold">{4.8}</AppText>
            <AppText className="text-sm text-darkGray self-center">
              117 reviews
            </AppText>
          </AppView>
          <AppView className="flex-row pr-3 pb-2 gap-3 border rounded-xl border-darkGray content-center w-fit">
            <TabBarIcon name={'hand-right'} className="text-lemon" size={20} />
            <AppText className="font-bold">94%</AppText>
          </AppView>
        </AppView>

        <AppView className="bg-lightGray rounded-xl p-3 flex-row items-center justify-between mt-5">
          <AppView className="flex-row items-center">
            <AppText className="text-lg font-bold mr-5">
              {userCurrency}
              {params.price}
            </AppText>
            <AppText>from {userCurrency}14 per month</AppText>
          </AppView>
          <TabBarIcon
            name={'alert-circle-outline'}
            size={30}
            className="text-darkGray"
          />
        </AppView>

        <AppText
          className="text-darkGray text-sm mt-3"
          numberOfLines={readMore ? undefined : 3}>
          {params.description}
        </AppText>
        {params.description.length > 151 ? (
          <AppButton
            titleClassName="font-semibold text-black"
            title={readMore ? 'Read less' : 'Read more'}
            inline
            onPress={() => {
              setReadMore(prev => !prev);
            }}
          />
        ) : null}

        <AppButton
          title="Add to cart"
          onPress={() => {
            dispatch(
              addToCart({
                count: 1,
                id: params.id,
                image: params.image,
                title: params.title,
                price: params.price,
              }),
            );
            router.navigate({pathname: '/(tabs)/cart'});
          }}
          className="mt-5 bg-lemon"
          titleClassName="text-black"
        />

        <AppText className="text-center text-sm mt-3">
          Delivery on 26 October
        </AppText>
      </AppScrollView>
    </AppView>
  );
};

export default ProductDetail;
