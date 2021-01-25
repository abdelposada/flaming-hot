import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from '@/components/Footer';
import Header from '@/components/Header';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  overflow-wrap: break-word;
  height: 100%;
  .content {
    flex: 1;
  }
`;

const AppLayout = ({ children }) => (
  <AppContainer>
    <Header />
    <main className="content">{children}</main>
    <Footer />
  </AppContainer>
);

AppLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default AppLayout;
