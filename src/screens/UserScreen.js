import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import COLORS from '../constants/colors';
import ProfileImage from '../../assets/images/ahmed.jpeg';
import ArrowRight from '../../assets/icons/arrow-right';

const UserScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{paddingBottom: 30}}>
            <Image
              source={ProfileImage}
              style={{borderRadius: 50, width: 100, height: 100}}
            />
          </View>
          <Text
            style={{
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
              color: COLORS.black,
            }}>
            Hello, Ahmed
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '400',
              textAlign: 'center',
              marginTop: 10,
              color: '#888',
            }}>
            Riyadh, Saudi Arabia
          </Text>
        </View>

        <View
          style={{
            paddingVertical: 15,
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignContent: 'center',
            alignItems: 'center',
            backgroundColor: COLORS.black,
            borderRadius: 50,
            margin: 20,
          }}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 17,
              fontWeight: '600',
              letterSpacing: 1,
            }}>
            ON GOING ORDER
          </Text>
          <View
            style={{
              backgroundColor: COLORS.fuchia,
              paddingVertical: 3,
              paddingHorizontal: 20,
              borderRadius: 50,
            }}>
            <Text style={{color: COLORS.white}}>3</Text>
          </View>
        </View>

        <TouchableOpacity style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Details Profile
            </Text>
            <View>
              <ArrowRight width={32} height={32} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Settings
            </Text>
            <View>
              <ArrowRight width={32} height={32} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Language
            </Text>
            <View
              style={{padding: 12, backgroundColor: '#ddd', borderRadius: 50}}>
              <Text>English</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Currency
            </Text>
            <View
              style={{padding: 12, backgroundColor: '#ddd', borderRadius: 50}}>
              <Text>$USD</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: COLORS.fuchia,
                letterSpacing: 0.5,
                textAlign: 'center',
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default UserScreen;
