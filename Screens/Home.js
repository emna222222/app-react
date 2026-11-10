import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import List from './Home/List';
import Group from './Home/Group';
import Setting from './Home/Setting';
const Tab=createBottomTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
<Tab.Screen component={List} name='List' />
<Tab.Screen component={Group}  name='Group'/>
<Tab.Screen component={Setting} name='Setting'/>
    </Tab.Navigator>
  )
}