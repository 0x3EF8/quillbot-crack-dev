import { useEffect } from 'preact/hooks';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from './store';
import Banner from './banner';
import Dialog from './dialog';
import Snackbar from './snackbar';
import ModifyStyle from './modifyStyle';

import { proxy, unproxy } from "./proxyAjax";
import check from './check';
import { init as initAnalytics } from './analytic';

export default function() {

  useEffect(() => {
    check();
    initAnalytics();
    proxy();
    return () => {
      unproxy();
    }
  }, []);

  return (
    <Provider store={store}>

      <Banner />
      <Dialog />

      <SnackbarProvider>
        <Snackbar />
      </SnackbarProvider>

      <ModifyStyle />

    </Provider>
  )
}
