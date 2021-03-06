import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { nativeStackConfig } from './nativeStackConfig';

import Routes from './routes';
import { Home, FlipASwitch, Landing, ScreenOptions, Brightness, LightTemperature } from '@calendar/screens';
import { useStore } from '@calendar/store';

const Stack = createStackNavigator();

function MainNavigatorWrapper() {
  return (
    <Stack.Navigator {...nativeStackConfig}>
      <Stack.Screen component={Landing} name={Routes.LANDING} />
      <Stack.Screen component={ScreenOptions} name={Routes.SCREENOPTIONS} />
      <Stack.Screen component={Home} name={Routes.HOME} />
      <Stack.Screen component={FlipASwitch} name={Routes.FLIPASWITCH} />
      <Stack.Screen component={LightTemperature} name={Routes.LIGHTTEMPERATURE} />
      <Stack.Screen component={Brightness} name={Routes.BRIGHTNESS} />
    </Stack.Navigator>
  );
}

const AppContainer = React.forwardRef((props, ref) => (
  <NavigationContainer ref={ref}>
    <MainNavigatorWrapper initialRoute={props.initialRoute} />
  </NavigationContainer>
));

AppContainer.displayName = 'AppContainer';

export default React.memo(AppContainer);
