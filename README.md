<p align="center"><a href="#" target="_blank"><img src="https://drive.google.com/uc?export=view&id=1rQZq6aXjbOuYdvZTpDpYujJ78E3o4kSh" width="400"></a></p>

Este proyecto es una prueba técnica para Mercado Libre.

## Primeros Pasos

1. Instalar paquetes.
```bash
yarn install
```
2. Asegúrese de que su backend esté corriendo.
```
https://github.com/thelord07/ml-backend
```

2. Cambiar .env.template a .env.local use el dominio donde corra su backend
```
API_BASE_URL='http://localhost:3001/api'
```

## Pruebas unitarias
Run test 
Editar el archivo de jest.setup.ts y configurar en mismo endpoint que el del .env
```
jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        backendUrl: '__endpoint__' 
    }
  }))
```


```
yarn test
```

Run the development server:
```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) en su navegador.

