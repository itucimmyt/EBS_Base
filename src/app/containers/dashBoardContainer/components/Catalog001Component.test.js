import TestRenderer from 'react-test-renderer';
import React from 'react'; 
import ReactDOM from 'react-dom';
import Catalog001Component from './Catalog001Component';
import { Typography } from '@material-ui/core';

const testRenderer2 = TestRenderer.create(<Catalog001Component />);
const testInstance2 = testRenderer2.root;

test('Test Render Component', () => {
    expect(testInstance2.findByType(Typography).props.foo).toBe('bar');//The property must be 'bar'    
    console.warn(testInstance2.findByType(Typography).props.foo);
});
