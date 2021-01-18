import React from 'react';
import {View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import MainStack from '../routes/MainStack';

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <Drawer.Screen name="MainStack" component={MainStack} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
      <View style={{flexGrow: 2}}>
        <DrawerItem
          label="Home"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <DrawerItem
          label="Recommended Softwares"
          onPress={() => navigation.navigate('SoftwareScreen')}
        />
        <DrawerItem
          label="IT Help"
          onPress={() => navigation.navigate('ITHelpScreen')}
        />
        <DrawerItem
          label="Public Holidays"
          onPress={() => navigation.navigate('HolidayScreen')}
        />
        <DrawerItem
          label="Calendar View"
          onPress={() => navigation.navigate('CalendarScreen')}
        />
        <DrawerItem
          label="My Referrals"
          onPress={() => navigation.navigate('ReferralScreen')}
        />
      </View>
    </DrawerContentScrollView>
  );
};