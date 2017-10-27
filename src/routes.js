import { StackNavigator } from 'react-navigation';
import {List} from './components/list';
import {Options} from './components/options';

const Routes = StackNavigator({
    List: { screen: List }    
});

export default Routes;