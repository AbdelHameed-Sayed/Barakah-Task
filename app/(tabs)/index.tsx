import React, {useEffect, useState} from 'react';

import {useQuery} from '@tanstack/react-query';
import {router} from 'expo-router';

import AppFlatList from '@/components/atoms/appFlatList/appFlatList';
import AppImage from '@/components/atoms/appImage/appImage';
import AppScrollView from '@/components/atoms/appScrollView/appScrollView';
import AppText from '@/components/atoms/appText/appText';
import AppTextInput from '@/components/atoms/appTextInput/appTextInput';
import AppView from '@/components/atoms/appView/appView';
import TabBarIcon from '@/components/atoms/tabBarIcon/tabBarIcon';
import AppButton from '@/components/molecules/appButton/appButton';
import Header from '@/components/molecules/header/header';
import LoadingCategoriesListComponent from '@/components/organismas/loadingCategoriesListComponent/loadingCategoriesListComponent';
import LoadingCategoryProductsListComponent from '@/components/organismas/loadingCategoryProductsListComponent/loadingCategoryProductsListComponent';
import RowTextAndSeeAllButton from '@/components/organismas/rowTextAndSeeAllButton/rowTextAndSeeAllButton';
import {GetCategoriesFunction, GetCategoryFunction} from '@/network/apis';
import {useAppSelector} from '@/store';

const Home = () => {
  const userCurrency = useAppSelector(s => s.user.currency);

  const [categoryName, setCategoryName] = useState('');

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useQuery({
    queryKey: ['GetCategories'],
    queryFn: GetCategoriesFunction,
  });

  const {
    data: categoryData,
    error: categoryError,
    isLoading: isCategoryLoading,
  } = useQuery({
    queryKey: ['GetCategory', categoryName],
    queryFn: () => GetCategoryFunction(categoryName),
    enabled: !!categoryName,
  });

  useEffect(() => {
    if (categoriesData && categoriesData.length > 0) {
      setCategoryName(categoriesData[0]);
    }
  }, [categoriesData]);

  return (
    <AppView className="flex-1 bg-lightGray">
      <AppView className="bg-white p-5 rounded-b-3xl mb-3">
        <Header
          subTitle="Delivery Address"
          title={'92 High Street, London'}
          rightElement={{
            type: 'customOne',
            onPress() {},
            customElement: (
              <TabBarIcon name={'notifications-outline'} size={30} />
            ),
            buttonClassName: 'bg-lightGray',
          }}
          leftElement={{
            type: 'custom',
            onPress() {},
            customElement: <TabBarIcon name={'settings-outline'} size={30} />,
            buttonClassName: 'z-10 rounded-full p-3 bg-lemon',
          }}
        />
        <AppTextInput
          placeholder="Search the entire shop"
          textInputClassName="text-lg"
          containerClassName="mt-5"
        />
      </AppView>

      <AppScrollView
        className="bg-white p-5 rounded-t-3xl h-full"
        showsVerticalScrollIndicator={false}>
        <RowTextAndSeeAllButton text="Categories" onPress={() => {}} />

        <AppView className="mb-5">
          {isCategoriesLoading || categoriesError ? (
            <LoadingCategoriesListComponent count={5} />
          ) : (
            <AppFlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoriesData ?? []}
              renderItem={({item, index}) => {
                return (
                  <AppButton
                    className={`items-center gap-5 ${categoriesData?.length === index + 1 ? '' : 'mr-7'}`}
                    onPress={() => {
                      setCategoryName(item);
                    }}
                    inline>
                    <AppView className="bg-lightGray h-20 w-20 rounded-full justify-center items-center">
                      <TabBarIcon name={'accessibility'} size={20} />
                    </AppView>
                    <AppText className="capitalize">{item}</AppText>
                  </AppButton>
                );
              }}
              ListEmptyComponent={<LoadingCategoriesListComponent count={5} />}
            />
          )}
        </AppView>

        <RowTextAndSeeAllButton text={categoryName} onPress={() => {}} />

        <AppView className="mb-7">
          {isCategoryLoading || categoryError ? (
            <LoadingCategoryProductsListComponent count={5} />
          ) : (
            <AppFlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={categoryData ?? []}
              renderItem={({item, index}) => {
                return (
                  <AppButton
                    className={`relative items-center gap-5 ml-1 ${categoryData?.length === index + 1 ? '' : 'mr-7'} w-48`}
                    onPress={() => {
                      router.navigate({
                        pathname: './productDetail',
                        params: item,
                      });
                    }}
                    inline>
                    <AppButton
                      inline
                      className="absolute top-7 right-3 z-10 rounded-full bg-white p-2"
                      onPress={() => {}}>
                      <TabBarIcon
                        name={'heart-outline'}
                        size={20}
                        className="text-darkGray"
                      />
                    </AppButton>

                    <AppView className="bg-lightGray h-48 w-full rounded-xl justify-center items-center p-10">
                      <AppImage
                        className="w-full h-full"
                        source={{
                          uri: item.image,
                        }}
                        loadingIndicatorSource={{
                          uri: 'assets/images//react-logo.png',
                        }}
                      />
                    </AppView>
                    <>
                      <AppText className="capitalize self-start ml-2">
                        {item.title}
                      </AppText>
                      <AppText className="self-start ml-2 mt-2 text-lg font-bold">
                        {userCurrency}
                        {item.price.toFixed(2)}
                      </AppText>
                    </>
                  </AppButton>
                );
              }}
              ListEmptyComponent={
                <LoadingCategoryProductsListComponent count={5} />
              }
            />
          )}
        </AppView>
      </AppScrollView>
    </AppView>
  );
};

export default Home;
