import React from 'react';
import MainPage from './mainPage';

const defaultTab = 1;

export default function RouteToTab1(){
  return(
    <MainPage defaultTab={defaultTab} />
  );
}