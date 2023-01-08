import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import { FC } from 'react'

import { NotFound } from '@pages/not-found'
import { Home } from '@pages/home'
import { Room } from '@pages/room'
import { store } from '@app/store'

import './App.css'

export const App: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route element={<Home />} path='/' />
					<Route element={<Room />} path='/room/:id' />
					<Route element={<NotFound />} path='*' />
				</Routes>
			</BrowserRouter>
		</Provider>
	)
}
