import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../constants/colors';
import BasketSVG from '../../assets/icons/basket';
import SearchInput from '../components/SearchInput';
import productList from '../constants/data';
import Product from '../components/Product';

const WishlistScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={{fontSize: 33, fontWeight: 'bold', color: COLORS.black}}>
          Wishlist
        </Text>
        <TouchableOpacity>
          <View>
            <View style={styles.basketNotEmptyCircle}></View>
            <BasketSVG
              storke={COLORS.black}
              width={44}
              height={44}
              fill={'none'}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={{padding: 20, marginTop: 10}}>
        <SearchInput />
      </View>

      <FlatList
        data={productList}
        style={{paddingHorizontal: 20}}
        keyExtractor={product => product.id}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <Product
              productName={item.productName}
              productImage={item.image}
              isWatchlisted={item.isWatchlisted}
              priceType={item.priceType}
              numOfReviews={item.numOfReviews}
              rate={item.rate}
              brandName={item.brandName}
              price={item.price}
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.grey,
  },
  header: {
    padding: 20,
    marginTop: 10,
    justifyContent: 'space-between',
    alignContent: 'space-between',
    flexDirection: 'row',
  },
  basketNotEmptyCircle: {
    width: 10,
    height: 10,
    backgroundColor: COLORS.fuchia,
    borderRadius: 50,
    position: 'absolute',
    right: 3,
    top: 3,
    zIndex: 1,
  },
});

export default WishlistScreen;
