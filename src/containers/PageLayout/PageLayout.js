import React, { Component, Fragment} from 'react';

import Header from '../../components/shared/Header/Header';

export class PageLayout extends Component{

  render() {
      const {
          component: Component,
      } = this.props;
      return (
              <Fragment>
                <Header/>
                <Component/>
              </Fragment>
      );
  }
};
export default PageLayout;



