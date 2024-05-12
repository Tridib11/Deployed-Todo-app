import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    define: {
      'process.env.REACT_APP_SERVERURL': JSON.stringify(process.env.REACT_APP_SERVERURL)
    },
    plugins: [react()],
  };
});
