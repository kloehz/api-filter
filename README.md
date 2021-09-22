## Challenge para Mercado libre
#### Guido Leonel Cotelesso
<p align="center"> <img src="https://d1.awsstatic.com/case-studies/LATAM/mercadolibre.1d9d3766bb06e60948f1c5ce8851ce0eac63b349.png" /> </p>


## Sobre el proyecto:
Este proyecto fue creado desde cero con `npm init` y se le adjunto:
- express
- cors
- dotenv
- axios


## Como inicar el proyecto
Clonar el proyecto copiar el contenido de `.env.example` a un nuevo archivo llamado `.env` ubicado en el mismo path.
Ejecutar `npm i` para instalar sus paquetes, y `npm run dev` o `npm start`.

## Descripcion de la api
Esa api tiene dos endpoints, los cuales llaman mediante axios a las apis de MELI.

- `/api/items`: Este llama a la url base mas `sites/MLA/search?q=`, filtrando la respuesta para devolver el json descripto en el challenge.
- `/api/items/:id`: Este llama a dos endpoints, se podria decir que es un BFF, estos endpoints son:
		`items/{ID}`
		`items/{ID}/description
Estos juntan sus respuestas y devuelven el json solicitado.