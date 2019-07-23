import React, { Component, lazy, Suspense } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import Loading from './components/loading/Loading';
import history from './history';
import store from './store/index';
import ExplandRouters from './explandRouters';

const HelloWord = lazy(() => import('./containers/HelloWord'));

const routes = [
  {
    path: '/hello',
    component: HelloWord,
    routes: [],
  },
];

class App extends Component {
  componentDidMount() {
  }

  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Suspense fallback={<Loading />}>
        <Provider store={store}>
          <Router history={history} path="/">
            <>
              {
                routes.map(route => (
                  <ExplandRouters key={route.path} {...route} />
                ))
              }
            </>
          </Router>
        </Provider>
      </Suspense>
    );
  }
}

export default App;
