import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './HomeScreen';
import ServicesScreen from './ServicesScreen';
import VolunteerScreen from './VolunteerScreen';

const AppNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Services: ServicesScreen,
  Volunteer: VolunteerScreen,
});

export default createAppContainer(AppNavigator);
