import { appRouter } from './pages/AppRouter';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import Page9 from './pages/Page9';
// css 追加
import './App.css';

// import Title1 from './components/Title1';
import Title2 from './components/Title2';

import { AuthContextProvider } from './contexts/AuthContext';

// ページ情報を定義して appRouter に設定
const pages = [
  { key: 'Home', path: '/', element: <Home /> },
  { key: 'Page1', path: '/page1', element: <Page1 /> },
  { key: 'Page2', path: '/page2', element: <Page2 text="text sample" /> },
  { key: 'Page3', path: '/page3', element: <Page3 /> },
  { key: 'Page4', path: '/page4', element: <Page4 /> },
  { key: 'Page5', path: '/page5', element: <Page5 /> },
  { key: 'Page6', path: '/page6', element: <Page6 /> },
  { key: 'Page7', path: '/page7', element: <Page7 /> },
  { key: 'Page8', path: '/page8', element: <Page8 /> },
  { key: 'Page9', path: '/page9', element: <Page9 /> },
];
const router = appRouter(pages);

const App = () => {
  return (
    <>
      <AuthContextProvider>
        {router.navbarLink}
        {/* 位置調整で main で括る */}
        <main>
          {/* <h1 style={{ color: 'red', fontSize: '30px' }}>Hello World</h1> */}
          {/* <p style={sty}>App.jsx</p> */}
          {/* <Title1
          h1style={{ color: 'red', fontSize: '30px' }}
          h1text={'Hello World title'}
          divstyle={{ color: 'blue', fontSize: '30px' }}
        >
          <p>App.jsx</p>
        </Title1> */}
          <Title2
            h1style={{ color: 'red', fontSize: '30px' }}
            h1text={'Hello World title'}
            divstyle={{ color: 'blue', fontSize: '30px' }}
          >
            <p>App.jsx</p>
          </Title2>
          {router.browserRouter}
        </main>
      </AuthContextProvider>
    </>
  );
};

export default App;
