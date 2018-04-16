import Splash from './Splash';
import LoginScreen from '../src/LoginScreen'
import RegisterScreen from '../src/RegisterScreen'
import CreateOrderScreen from '../src/CreateOrderScreen'
import { StackNavigator, SwitchNavigator } from 'react-navigation';

const SplashStack = StackNavigator({ 
 Splash: {
    screen: Splash,
    navigationOptions: {
      header: false
    }
  }});
const AppStack = StackNavigator({ 
  CreateOrder: {
    screen: CreateOrderScreen,
    navigationOptions: {
      title: 'Create Order',
    }
  }});
const AuthStack = StackNavigator({ 
	Login: {
    screen: LoginScreen,
    navigationOptions: {
      title: 'Login',
    }
  }, 
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      title: 'Register',
    }
  } });

const RootNavigator =  SwitchNavigator(
  {
    Splash: SplashStack,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Splash',
  }
);




export default RootNavigator;
