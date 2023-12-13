import { io } from 'socket.io-client';
import React from 'react';

export const API_URL = import.meta.env.VITE_API_URL;
export const socket = io(API_URL);
// app context
export const AppContext = React.createContext();
