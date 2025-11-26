import { Routes } from '@angular/router';
import { Pan } from './components/pages/pan/pan';
import { Pasteleria } from './components/pages/pasteleria/pasteleria';
import { Integral } from './components/pages/pan/integral/integral';
import { Blanco } from './components/pages/pan/blanco/blanco';
import { Lenia } from './components/pages/pan/lenia/lenia';
import { Pueblo } from './components/pages/pan/pueblo/pueblo';
import { Bizcocho } from './components/pages/pasteleria/bizcocho/bizcocho';
import { Galletas } from './components/pages/pasteleria/galletas/galletas';
import { Croissant } from './components/pages/pasteleria/croissant/croissant';
import { Magdalenas } from './components/pages/pasteleria/magdalenas/magdalenas';
import { Pastelito } from './components/pages/pastelito/pastelito';

export const routes: Routes = [
    {path: 'pan', component: Pan},
    {path: 'pasteleria', component: Pasteleria},
    {path: 'integral', component: Integral},
    {path: 'blanco', component: Blanco},
    {path: 'lenia', component: Lenia},
    {path: 'pueblo', component: Pueblo},
    {path: 'bizcocho', component: Bizcocho},
    {path: 'galletas', component: Galletas},
    {path: 'croissant', component: Croissant},
    {path: 'magdalenas', component: Magdalenas},
    {path: '', component: Pastelito}

];
