import {  Text, View } from 'react-native';
import Home from './src/screen/Home'
import { Provider } from 'react-redux';
import { store } from './src/store/Store';
export default function HomeScreen() {
  return (
   <Provider store={store}>
     <Home/>
     </Provider>
  );
}


