import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import { Home } from './components/Home/index.jsx'
import { About } from './components/About/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import { Menu } from './components/Menu/index.jsx'
import { Posts } from './components/Posts/index.jsx'
import { Redirect } from './components/Redirect/index.jsx'
import { NotFound } from './components/NotFound/index.jsx'
import { Post } from './components/Post/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <Menu />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* <Route path='/post/:id' element={<Post />} /> */}
      <Route path='/posts' element={<Posts />} >
        <Route path=':id' element={<Post />} />
      </Route>
      <Route path='/posts' element={<Posts />} />
      <Route path='/redirect' element={<Redirect />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)


//Path define a condição, sendo o caminho que eu estou. Ou seja, qual primeira página que será renderizado no site
//Element define qual elemento será renderizado na tela 
//Quando declaramos uma rota com especifidade mais alta, devemos colocá-la acima acima da sua rota mais genérica