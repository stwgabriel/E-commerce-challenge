import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { Container } from './styles';

import frexcoLogo from '../../assets/images/logo-frexco.png';

function Loader({ renderLoader }) {

  if (!renderLoader) { return null; }

  return createPortal(
    <Container>
      <h1 id="logo-frexco">
        <img src={frexcoLogo} alt="Frexco" />
      </h1>
      <div className="loader" />
    </Container>,
    document.getElementById('loader-root'),
  );
}

Loader.propTypes = {

  renderLoader: PropTypes.bool.isRequired,
};

export default Loader;
