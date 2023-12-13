import { io } from 'socket.io-client';
import React from 'react';
export const API_URL = 'https://chat-app-api-1.up.railway.app';
export const socket = io(API_URL);
// app context
export const AppContext = React.createContext();
