import ReactOnRails from 'react-on-rails';

import Footer from '../components/layouts/footer';
import ComboBox from '../components/combos/box';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Footer, ComboBox
});
