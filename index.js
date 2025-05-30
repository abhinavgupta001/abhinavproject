/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {PaperProvider} from 'react-native-paper';
import BootSplash from 'react-native-bootsplash';
if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}
import mobileAds, {MaxAdContentRating} from 'react-native-google-mobile-ads';
import {useEffect} from 'react';

const MainApp = () => {
  mobileAds()
    .initialize()
    .then(res => {
      if (res) {
        console.log('Ads initialized');
      }
    });
  useEffect(() => {
    (async () => {
      await BootSplash.hide({fade: true});
    })();
  }, []);
  return (
    <PaperProvider
      theme={{
        dark: true,
      }}>
      <App />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => MainApp);
