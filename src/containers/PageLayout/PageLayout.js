import React, { Component, Fragment} from 'react';

import Header from '../../components/shared/Header/Header';
import Footer from '../../components/shared/Footer/Footer';

export class PageLayout extends Component{

  render() {
      const {
          component: Component,
      } = this.props;
      return (
              <Fragment>
                <Header/>
                <Component/>
                <Footer/>
              </Fragment>
      );
  }
};
export default PageLayout;



