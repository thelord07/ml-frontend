import '@testing-library/jest-dom/extend-expect'


jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        backendUrl: 'http://localhost:3001/api' 
    }
  }))