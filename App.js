import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mainnavigator from './App/Navigator/Mainnavigator';
import 'react-native-gesture-handler';
import Splashscreen from './App/Screen/Home/Splashscreen';
import Signup from './App/Screen/Home/Signup';
import register from './App/Screen/Auth/register';
import PrivacyPolicy from './App/Screen/Account/privacy';
import Terms from './App/Screen/Account/Terms';
import Forgotpass from './App/Screen/Auth/forgotpass';
const Stack = createNativeStackNavigator();

function App() {
  const [showsplashscreen, setshowsplashscreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowsplashscreen(false);
    }, 1000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {showsplashscreen ? (
          <Stack.Screen
            name="splashscreen"
            options={{headerShown: false}}
            component={Splashscreen}
          />
        ) : null}
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="mainscreen"
          options={{headerShown: false}}
          component={Mainnavigator}
        />
        <Stack.Screen
          name="register"
          options={{headerShown: false}}
          component={register}
        />
        <Stack.Screen
          name="Privacy-Policy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="resetPass"
          component={Forgotpass}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
