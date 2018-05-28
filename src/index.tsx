import './style.scss';

import { render } from 'inferno';

import { MyApp } from './app/app';
// import { loadFontawesomeIcons } from './app/fontawesome';
// loadFontawesomeIcons();

// https://github.com/serkon/fusebox/blob/master/fuse.js
render(
    <MyApp />,
    document.getElementById("app")
);