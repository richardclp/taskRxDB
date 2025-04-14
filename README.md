# Gestor de Tareas con RxDB 🚀

Aplicación de gestión de tareas desarrollada con **React.js** y **RxDB** como base de datos local para operaciones CRUD con soporte **offline-first** y reactividad.

## Características ✨

- ✅ **CRUD completo** (Crear, Leer, Actualizar, Eliminar tareas)
- ✅ **Base de datos local** con RxDB (basado en PouchDB/IndexedDB)
- ✅ **Funciona sin conexión** (offline-first)
- ✅ **Interfaz reactiva** (actualización automática de la UI)

## Tecnologías 🛠️

- **Frontend**: React.js (Vite o CRA)
- **Base de datos**: RxDB
- **Almacenamiento**: IndexedDB (para persistencia en navegador)

## Instalación 📦

1. Clona el repositorio:
   ```bash
   git clone https://github.com/richardclp/taskRxDB.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   # o
   yarn install
   ```
3. Inicia el servidor:
   ```bash
   npm start
   # o
   yarn start
   ```

## Estructura del Proyecto 📂

```
/src
├── components/      # Componentes React (TodoDB, etc.)
├── db/             # Configuración de RxDB
├── App.jsx         # Componente principal
└── main.jsx        # Punto de entrada
```

## ¿Cómo Contribuir? 🤝

1. Haz un **fork** del proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Haz commit de tus cambios (`git commit -m 'Añade X funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un **Pull Request**

### Posibles Mejoras (Roadmap) 🚧

- [ ] Añadir sincronización con CouchDB
- [ ] Implementar autenticación
- [ ] Añadir filtros y búsqueda
