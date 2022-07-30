import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowNarrowLeft from '../../assets/icons/arrow-narrow-left';
import COLORS from '../constants/colors';
import AddressIcon from '../../assets/icons/address';
import VersionsIcon from '../../assets/icons/versions';
import TermsIcon from '../../assets/icons/notes';
import ShieldIcon from '../../assets/icons/shield';
import CreditCardIcon from '../../assets/icons/credit-card';
import BellIcon from '../../assets/icons/bell';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.grey}}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <ArrowNarrowLeft />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              textAlign: 'center',
              alignSelf: 'center',
              flex: 1,
              fontSize: 18,
              fontWeight: '600',
              letterSpacing: 0.4,
            }}>
            Settings
          </Text>
        </View>

        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', color: '#888', letterSpacing: 0.5}}>
            My Account
          </Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Address Book
            </Text>
            <View>
              <AddressIcon width={32} height={32} />
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
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Payment Information
            </Text>
            <View>
              <CreditCardIcon width={32} height={32} />
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
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Notification
            </Text>
            <View>
              <BellIcon width={32} height={32} />
            </View>
          </View>
        </TouchableOpacity>

        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', color: '#888', letterSpacing: 0.5}}>
            Information
          </Text>
        </View>

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Version
            </Text>
            <View>
              <VersionsIcon width={32} height={32} />
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
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Terms & Conditions
            </Text>
            <View>
              <TermsIcon width={32} height={32} />
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
              padding: 15,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: COLORS.black,
                letterSpacing: 0.5,
              }}>
              Privacy Policy
            </Text>
            <View>
              <ShieldIcon width={32} height={32} />
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingScreen;
