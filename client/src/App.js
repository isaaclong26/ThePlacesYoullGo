import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Bucket from './pages/Bucket';
import MyPlaces from './pages/MyPlaces';
import Places from './pages/Places';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import Signup from './pages/Signup';
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});




function App() {
  // const [token, setToken] = useState();
  return (
    <ApolloProvider client={client}>
    <div>
      <Router>
      <Navbar />
    
      <Route exact path = "/" >
        <Home />
      </Route>
      <Route exact path = "/login" >
      <Login />
      </Route>
      <Route exact path = "/signup" >
      <Signup />
      </Route>
    
      <Route exact path = "/bucket" >
      <Bucket />
      </Route>
      <Route exact path = "/myplaces" >
      <MyPlaces />
      </Route>
      <Route exact path = "/places" >
      <Places />
      </Route>

      
      <Footer />
      </Router>
    </div>
    </ApolloProvider>
  );
}

export default App;