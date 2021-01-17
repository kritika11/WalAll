import React from 'react';
import {View, Text} from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CalendarScreen from '../screens/CalendarScreen';
import HolidayScreen from '../screens/HolidayScreen';
import ITHelpScreen from '../screens/ITHelpScreen';
import ReferralsScreen from '../screens/ReferralsScreen';
import SoftwareScreen from '../screens/SoftwareScreen';

const DrawerNavigator = createDrawerNavigator({
    Calendar: CalendarScreen,
    RecommendedSoftware: SoftwareScreen,
    ITHelp: ITHelpScreen,
    PublicHolidays: HolidayScreen,
    MyReferrals: ReferralsScreen
});

export default DrawerNavigator;