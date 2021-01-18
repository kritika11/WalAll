import React, {useEffect} from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
import {View} from 'react-native';

import LeftDrawer from '../components/LeftDrawer';

const Drawer = createDrawerNavigator();

export default ({navigation}) => {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <CustomDrawerComp {...props} />}>
      <Drawer.Screen name="LeftDrawer" component={LeftDrawer} />
    </Drawer.Navigator>
  );
};

export const CustomDrawerComp = (props) => {
  const {navigation} = props;

  return (
    <DrawerContentScrollView {...props}>
    <View style={{flexGrow: 2}}>
        <DrawerItem
        label="Notifications"
        onPress={() => navigation.navigate('NotificationScreen')}
        />
    </View>
    </DrawerContentScrollView>
  );
};