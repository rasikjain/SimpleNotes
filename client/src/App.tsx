import './styles/App.css';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './ApolloClient';
import Header from './components/Header';
import { MainBody } from './components/MainBody';
import { Footer } from './components/Footer';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Header></Header>
        <MainBody></MainBody>
        <Footer></Footer>
      </div>
    </ApolloProvider>
  );
}

export default App;
