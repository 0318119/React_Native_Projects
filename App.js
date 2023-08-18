import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';
const Stack = createNativeStackNavigator();




function App(){
  return (
   <>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Welcome'}}/>
      </Stack.Navigator>
    </NavigationContainer>
   </>
  );
}



export default App;
