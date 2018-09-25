import { StackNavigator } from "react-navigation";
import Home from "./Home";
import Login from "./Login";
import SignUp from './signup';

const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
    Login: { 
      screen: Login,
      navigationOptions: () => ({
        title: `Home`,
      }),
    },
    SignUp : {
      screen: SignUp,
      navigationOptions: () => ({
        title: `Home`,
      }),
    }
  }
);

export default AppNavigator;
