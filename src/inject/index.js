import { render, h } from 'preact';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import store from 'store';
import Banner from './banner';
import Dialog from './dialog';
import Snackbar from './snackbar';
import ModifyStyle from './modifyStyle'

function Inject() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <Snackbar />
      </SnackbarProvider>
      <ModifyStyle />
      <Banner />
      <Dialog />
    </Provider>
  )
}

export default async function () {
  const injectDomContainer = document.createElement('div');
  render(<Inject />, injectDomContainer);
  if (document.body) {
    document.body.appendChild(injectDomContainer);
  } else {
    window.addEventListener('DOMContentLoaded', () => document.body.appendChild(injectDomContainer));
  }
}