# 📁 Portafolio Web - Semana 3

## 📌 Descripción

Este proyecto es un portafolio web desarrollado con **HTML, CSS y JavaScript**, donde se aplican conceptos de diseño responsivo, organización de estilos y uso de layouts modernos como **Flexbox y Grid**.

Se mejoró la versión de la semana 1 y 2 agregando estructura profesional, interactividad y mejor organización del código.

---

## 🧩 Estructura del proyecto

```bash
public/
│
├── img/              # Imágenes (mascotas, recursos visuales)
├── audio/
├── videos/
├── icons/
├── docs/
│
src/
│
├── css/
│   ├── base/         # Reset y variables
│   ├── layout/       # Header y grid
│   ├── components/   # Botones, tarjetas
│   ├── pages/        # Estilos por página
│   ├── style.css     # Archivo principal
│
├── views/
│   ├── mascotas.html
│
├── index.html
├── script.js
├── README.md
```

---

## 🎯 Funcionalidades

* Navegación entre páginas
* Diseño responsivo (móvil, tablet, escritorio)
* Uso de Flexbox en header y galería
* Uso de Grid en sección de proyectos
* Galería de mascotas organizada
* Interactividad con JavaScript
* Código organizado en módulos CSS

---

## 📱 Diseño Responsive

Se implementaron **media queries** para adaptar el diseño:

### 🔹 Móvil

* Menú en columna
* Proyectos en 1 columna
* Galería en 2 columnas

### 🔹 Tablet

* Proyectos en 2 columnas
* Galería en 3 columnas

### 🔹 Escritorio

* Proyectos en 3 columnas

---

## 🎨 CSS (Arquitectura)

El CSS está dividido en carpetas para mejor organización:

* **base/** → estilos globales y variables
* **layout/** → estructura (header, grid)
* **components/** → botones, tarjetas
* **pages/** → estilos específicos (mascotas)

Ejemplo de importación:

```css
@import url('./base/reset.css');
@import url('./layout/header.css');
```

---

## 📐 Layouts utilizados

### 🔹 Flexbox

Usado en:

* Header (alineación y distribución)
* Navegación
* Galería (en pruebas con flex-wrap)

### 🔹 Grid

Usado en:

* Sección de proyectos
* Galería de mascotas (modo mosaico)

---

## ⚡ JavaScript

Se agregó interactividad básica:

* Mensaje de bienvenida
* Cambio de texto con botón
* Mostrar/ocultar contenido

Ejemplo:

```javascript
function cambiarTexto() {
    document.getElementById("texto").innerHTML = "Estoy aprendiendo JavaScript 🚀";
}
```

---

## 🖼️ Imágenes Responsivas

Todas las imágenes usan:

```css
img {
    max-width: 100%;
    height: auto;
}
```

---

## ✅ Criterios cumplidos

✔ Se mejoró el portafolio de la semana 1
✔ Header con Flexbox
✔ Proyectos con Grid
✔ Galería con Flexbox y Grid
✔ Diseño responsivo
✔ CSS organizado en carpetas
✔ Código limpio y documentado
✔ Interactividad con JavaScript

---

## 🚀 Conclusión

Este proyecto permitió entender cómo estructurar mejor un sitio web, aplicar buenas prácticas en CSS y agregar interactividad básica con JavaScript.

---

## 👤 Autor

**Elian Rivera**
