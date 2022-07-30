import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import SearchIcon from '../../assets/icons/search';
import COLORS from '../constants/colors';

const SearchInput = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 20,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
      }}>
      <SearchIcon width={30} style={{alignSelf: 'center'}} />
      <TextInput
        placeholder="Search your watchlist product"
        autoCorrect={false}
        style={styles.textInput}
        autoCapitalize={'none'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 45,
    paddingLeft: 15,
    fontSize: 18,
    color: COLORS.fuchia,
    flex: 1,
  },
});

export default SearchInput;
