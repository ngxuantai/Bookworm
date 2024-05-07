import {Loading} from './src/components';
import {PortalProvider} from '@gorhom/portal';
import {persistor, store, useAppDispatch, useAppSelector} from './src/redux';
import React from 'react';
import {StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import RootNav from './src/navigation/root-nav';

const MainApp = () => {
  const isLoading = useAppSelector(state => state.app.loading);
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <PortalProvider>
          <StatusBar
            translucent
            backgroundColor={'transparent'}
            barStyle={'dark-content'}
          />
          <RootNav />
          {isLoading && <Loading />}
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
