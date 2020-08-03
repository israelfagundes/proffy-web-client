import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/teach" component={TeacherForm} />
      <Route path="/study" component={TeacherList} />
    </Switch>
  );
}

export default Routes;
