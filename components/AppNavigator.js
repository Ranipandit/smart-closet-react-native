import { StackNavigator } from "react-navigation";
import Home from "./Home";
import Login from "./Login";

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
    }
  }
);

export default AppNavigator;
