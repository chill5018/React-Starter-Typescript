import * as React from 'react';
import { storiesOf } from '@storybook/react';

import App from '.';


storiesOf('App', module)
  .add('Root', () => <App title="Demo" />)