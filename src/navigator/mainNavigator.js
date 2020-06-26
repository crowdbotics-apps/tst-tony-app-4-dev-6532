import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen96931Navigator from '../features/BlankScreen96931/navigator';
import BlankScreen86677Navigator from '../features/BlankScreen86677/navigator';
import BlankScreen76676Navigator from '../features/BlankScreen76676/navigator';
import BlankScreen66664Navigator from '../features/BlankScreen66664/navigator';
import BlankScreen56663Navigator from '../features/BlankScreen56663/navigator';
import BlankScreen46662Navigator from '../features/BlankScreen46662/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen96931: { screen: BlankScreen96931Navigator },
BlankScreen86677: { screen: BlankScreen86677Navigator },
BlankScreen76676: { screen: BlankScreen76676Navigator },
BlankScreen66664: { screen: BlankScreen66664Navigator },
BlankScreen56663: { screen: BlankScreen56663Navigator },
BlankScreen46662: { screen: BlankScreen46662Navigator },
Messenger: { screen: MessengerNavigator },
Calendar: { screen: CalendarNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
