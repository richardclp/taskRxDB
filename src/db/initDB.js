import { createRxDatabase, addRxPlugin } from "rxdb/plugins/core";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageLocalstorage } from "rxdb/plugins/storage-localstorage";
import { wrappedValidateAjvStorage } from "rxdb/plugins/validate-ajv";
import { getAjv } from "rxdb/plugins/validate-ajv";
import ajvFormats from "ajv-formats";
import { todoSchema } from "./todoSchema";

// Configurar AJV
const ajv = getAjv();
ajvFormats(ajv);

// Añadir plugins
addRxPlugin(RxDBDevModePlugin);

export const initializeDB = async () => {
  try {
    const database = await createRxDatabase({
      name: "todosdb",
      storage: wrappedValidateAjvStorage({
        storage: getRxStorageLocalstorage(),
      }),
      closeDuplicates: true,
    });

    await database.addCollections({
      todos: { schema: todoSchema },
    });

    return database;
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
};
