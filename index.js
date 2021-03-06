import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import Feed from './src/screens/Feed';
import Navigator from './src/Navigator';

import storeConfig from './src/store/storeConfig';

const store = storeConfig()

const Redux = () => (
    <Provider store={store}>
        <Navigator />
    </Provider>
)

AppRegistry.registerComponent('instagramax', () => Redux);