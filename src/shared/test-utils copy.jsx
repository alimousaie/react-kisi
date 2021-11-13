import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// store = configureStore({ reducer: rootReducer, preloadedState }),

const mockStore = configureStore([]);

function render(
	ui,
	{ preloadedState, store = mockStore(preloadedState), ...renderOptions } = {}
) {
	function Wrapper({ children }) {
		return (
			<Provider store={store}>
				<Router>{children}</Router>
			</Provider>
		);
	}
	return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// // re-export everything
export * from '@testing-library/react';
// // override render method
export { render };
