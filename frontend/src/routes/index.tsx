import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherForm from '../pages/TeacherForm';
import AvailableClasses from '../pages/AvailableClasses';
import SuccessPage from '../pages/SuccessPage';

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/teacher" component={TeacherForm} />
        <Route path="/classes" component={AvailableClasses} />
        <Route path="/success" component={SuccessPage} />
      </Switch>
    </>
  );
};

export default Routes;
