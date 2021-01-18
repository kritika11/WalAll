import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/HomeScreen'
import CalendarScreen from '../screens/CalendarScreen';
import HolidayScreen from '../screens/HolidayScreen';
import ITHelpScreen from '../screens/ITHelpScreen';
import ReferralsScreen from '../screens/ReferralsScreen';
import SoftwareScreen from '../screens/SoftwareScreen';
import NotificationScreen from '../screens/NotificationScreen'

const Stack = createStackNavigator();

export default ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home                                                        <-" component={Home} />  
      <Stack.Screen name="CalendarScreen" component={CalendarScreen} />
      <Stack.Screen name="HolidayScreen" component={HolidayScreen} />
      <Stack.Screen name="ITHelpScreen" component={ITHelpScreen} />
      <Stack.Screen name="ReferralsScreen" component={ReferralsScreen} />
      <Stack.Screen name="SoftwareScreen" component={SoftwareScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
    </Stack.Navigator>
  );
};