import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './Context/CartContext';
import { DarkModeProvider } from './Context/DarkModeContext';
import { LoginProvider } from './Context/LoginContext';
import AppRouter from './router/AppRouter';

const App = () => {


    return (

      <LoginProvider>
      <CartProvider>
        <DarkModeProvider>
 
      <AppRouter/>

        </DarkModeProvider>
      </CartProvider>
      </LoginProvider>  );
}

export default App;
