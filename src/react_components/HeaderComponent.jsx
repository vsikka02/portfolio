import { background } from '@chakra-ui/react';
import React, { Component } from 'react'
import { MenuItem, Menu, Sticky, Icon, Button } from 'semantic-ui-react'

export default function HeaderComponent() {
    const [activeItem, setActiveItem] = React.useState('Meet Me');

    return (
      <div>
        <Sticky>
        <Menu pointing secondary stackable size = 'massive' fixed='top' >
          <MenuItem
            name='MEET ME'
            active={activeItem === 'Meet Me'}
            onClick={() => setActiveItem('Meet Me')}
          />
          <MenuItem
            name='MY JOURNEY'
            active={activeItem === 'My Journey'}
            onClick={() => setActiveItem('My Journey')}
          />
          <MenuItem
            name='MY BLUEPRINT'
            active={activeItem === 'My Blueprint'}
            onClick={() => setActiveItem('My Blueprint')}
          />
         <MenuItem
            name='CRAFTED CREATIONS'
            active={activeItem === 'Crafted Creations'}
            onClick={() => setActiveItem('Crafted Creations')}
          />
         <MenuItem
            name="CONNECT WITH ME"
            active={activeItem === 'Lets Connect'}
            onClick={() => setActiveItem('Lets Connect')}
          />
         <MenuItem position='right' className='linkedin button'>
            <Icon name='linkedin'/>
            <span className='linkedin'>LinkedIn</span>
          </MenuItem>
        </Menu>
        </Sticky>
      </div>
    );
}
