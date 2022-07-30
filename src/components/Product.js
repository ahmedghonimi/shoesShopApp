import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import AdidasIcon from '../../assets/icons/adidas';
import HeartIcon from '../../assets/icons/heart';
import StarIcon from '../../assets/icons/star';
import COLORS from '../constants/colors';
const Product = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        marginTop: 5,
        paddingBottom: 15,
      }}>
      <View>
        <Image
          source={props.productImage}
          style={{width: 110, height: 110, borderRadius: 30}}
        />
      </View>

      <View>
        <AdidasIcon />
        <Text style={{color: COLORS.black, fontSize: 14, fontWeight: '500'}}>
          {props.productName}
        </Text>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <StarIcon />
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: 4,
              marginLeft: 5,
              color: COLORS.black,
            }}>
            {props.rate}
          </Text>
          <Text style={{marginTop: 4, marginLeft: 5, color: 'grey'}}>
            ({props.numOfReviews} Reviews)
          </Text>
        </View>
        <Text
          style={{
            color: COLORS.fuchia,
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 4,
          }}>
          $ {props.price}.00
        </Text>
      </View>

      <View>
        <TouchableOpacity>
          <HeartIcon
            width={33}
            height={33}
            fill={props.isWatchlisted ? COLORS.black : 'none'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
