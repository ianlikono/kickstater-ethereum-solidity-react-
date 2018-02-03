import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => (
  <Menu style={{ marginTop: '15px' }}>
    <Link route='/'>
      <a className = 'item'>
        KickStarter
      </a>
    </Link>

    <Menu.Menu position ="right">
      <Link route='/'>
        <a className = 'item'>
          campaigns
        </a>
      </Link>

      <Link route='/campaigns/new'>
        <a className = 'item'>
          +
        </a>
      </Link>
    </Menu.Menu>
  </Menu>
);
