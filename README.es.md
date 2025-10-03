# Práctica #2 - Gestión de Paquetes con Angular

[cite_start]Este proyecto fue desarrollado como parte de la práctica No. 2 para el curso de Programación Web de la Universidad Mesoamericana. [cite: 2] La aplicación permite registrar y dar seguimiento a paquetes de envío, cumpliendo con los requisitos especificados.

##  Características Principales

* [cite_start]**Creación de Órdenes**: Formulario para registrar nuevos paquetes con validaciones personalizadas (nombre, correo, descripción, etc.). [cite: 21]
* [cite_start]**Actualización de Órdenes**: Permite buscar una orden por su número de paquete y actualizar su estado siguiendo una secuencia lógica de transiciones. [cite: 32]
* [cite_start]**Seguimiento de Paquete**: Vista para que el cliente final pueda rastrear su paquete usando un ID de seguimiento único y ver el historial de actualizaciones. [cite: 48]
* **Gestión de Datos en Memoria**: Utiliza un servicio de Angular para manejar el estado de la aplicación y compartir datos entre componentes sin necesidad de una base de datos.
* [cite_start]**Diseño Responsivo**: La interfaz se adapta a diferentes tamaños de pantalla, desde móviles hasta escritorio, utilizando Bootstrap. [cite: 56]

##  Cómo Ejecutar el Proyecto Localmente

Para ejecutar este proyecto en tu propia máquina, sigue estos pasos:

1.  Clona o descarga el repositorio.
2.  Abre una terminal en la carpeta raíz del proyecto.
3.  Instala las dependencias necesarias con el comando:
    ```bash
    npm install
    ```
4.  Inicia el servidor de desarrollo de Angular con el comando:
    ```bash
    ng serve -o
    ```
5.  La aplicación se abrirá automáticamente en tu navegador en `http://localhost:4200/`.