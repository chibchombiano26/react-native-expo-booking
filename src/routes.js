import { StackNavigator } from 'react-navigation';
import {List} from './components/list';
import {Confirmation} from './components/confirmation';

const Routes = StackNavigator({
    List: { screen: List },    
    Confirmation: { screen: Confirmation }    
});

export default Routes;