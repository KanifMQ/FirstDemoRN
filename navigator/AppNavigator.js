import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialTopTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'


const TabNavigator = createMaterialTopTabNavigator({
    Emp: EmployeeNavigator,
    Maps: MapsScreen
}, {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
            backgroundColor: '#633689',
        },
        labelStyle: {
            textAlign: 'center',
        },
        indicatorStyle: {
            borderBottomColor: '#87B56A',
            borderBottomWidth: 2,
        },
    },
})
const EmployeeNavigator = createStackNavigator({
    Tabs: TabNavigator,
    EmpDetails: EmployeeDetailsScreen
})
export default createAppContainer(EmployeeNavigator)





