import React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import NavigationScreen from '../screens/NavigationScreen';

const NotificationNavigator = createDrawerNavigator({
    Navigation: NavigationScreen
});

export default NotificationNavigator;