import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { WhatIs,Identity, Addresses, Roadmap, HowTo, SDK, Features, Links, Protocol } from './views/Pages';
import Header from './componets/Header'
import Navigation from './componets/Navigation'

const App:React.FC = () => <div className='App'>
  <Header>
    <Navigation />
  </Header>
  <Routes>
    <Route path='/' element={<WhatIs />} />
    <Route path='/self-sovereign_identity' element={<Identity />} />
    <Route path='/addresses' element={<Addresses />} />
    <Route path='/how_to' element={<HowTo />} />
    <Route path='/sdk' element={<SDK />} />
    <Route path='/features'element={<Features />} />
    <Route path='/links' element={<Links />} />
    <Route path='/protocol' element={<Protocol />} />
    <Route path='/roadmap' element={<Roadmap />} />
  </Routes>
</div>;

export default App;
