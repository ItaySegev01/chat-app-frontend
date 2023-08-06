import { io } from "socket.io-client";
import React from "react";
export const API_URL = "http://localhost:5000";
export const socket = io(API_URL);
// app context
export const AppContext = React.createContext();