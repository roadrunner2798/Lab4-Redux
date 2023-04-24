import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box, Container } from '@mui/system';

import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Counter from "./components/Counter";
import List from "./components/List";

import { store } from './redux/store'
import { Provider } from 'react-redux'

function App() {
  return (

    <div className="App">

      <Provider store={store}>

        <Container maxWidth="sm" sx={{ mt: 5 }}>

          <BrowserRouter>
            <Box sx={{ mb: 3 }}>
              <Menu />
            </Box>
            <Routes>
              <Route exact path="counter" element={<Counter />} />
              <Route exact path="list" element={<List />} />

            </Routes>
          </BrowserRouter>

        </Container>

      </Provider>

    </div>
  );
}

export default App;