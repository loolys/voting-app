import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './components/main';
import IndexPage from './components/index-page';
import NotFoundPage from './components/not-found-page';

const routes = (
	<Route path="/" component={Main}>
		<IndexRoute component={IndexPage} />
		<Route path="*" component={NotFoundPage} />
	</Route>	
);

export default routes;
