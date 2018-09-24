import { createStackNavigator } from 'react-navigation';
import Home from './Home';
import Login from './Login';

const AppNavigator = createStackNavigator({
    Home: { screen: Home },
    Login: { screen: Login}
  });
  
export default AppNavigator;