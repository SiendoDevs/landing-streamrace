# Instrucciones para Activar Google Analytics

## Paso 1: Obtener tu ID de Google Analytics 4

1. Ve a [Google Analytics](https://analytics.google.com/)
2. Click en "Crear propiedad"
3. Nombre: "Streamrace Landing"
4. Ubicación: Argentina
5. Timezone: Selecciona tu zona horaria
6. Industria: Software/Aplicaciones
7. Tamaño: Pequeño (menos de 10,000 eventos/día)
8. Click en "Crear"
9. En la siguiente pantalla selecciona "Web"
10. URL del sitio: https://streamrace.solutions
11. Nombre del stream: "streamrace-landing"
12. Click en "Crear stream"
13. Copia el "Measurement ID" (empieza con G-)

## Paso 2: Agregar GA a tu App

### Opción A: Usando el Hook (Recomendado)

1. Abre `src/App.jsx`
2. Importa el hook:
```javascript
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';
```

3. Usa el hook en el componente:
```javascript
function App() {
  useGoogleAnalytics('G-XXXXXXXXXX'); // Reemplaza con tu ID
  
  return (
    <Router>
      {/* tu contenido */}
    </Router>
  );
}
```

### Opción B: Directamente en index.html

1. Abre `index.html`
2. Antes de `</head>`, agrega:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
<!-- End Google Analytics -->
```

## Paso 3: Verificar Que Funciona

1. En Google Analytics, ve a "Tiempo real"
2. Abre tu sitio en otra pestaña
3. Deberías ver actividad en tiempo real

## Paso 4: Monitorear Datos

- **Usuarios**: Personas que visitan tu sitio
- **Sessions**: Sesiones/visitas
- **Conversion Rate**: Porcentaje que completa acciones
- **Bounce Rate**: % que se va sin interactuar
- **Average Session Duration**: Tiempo promedio en sitio
- **Top Pages**: Páginas más visitadas

## Paso 5: Eventos Personalizados (Avanzado)

Puedes rastrear eventos específicos como:
- Click en "Solicitar Demo"
- Enviado formulario
- Click en links de precios

```javascript
// En tu componente
window.gtag('event', 'click_demo_button', {
  'event_category': 'engagement',
  'event_label': 'demo_button_clicked'
});
```

## Integración con Google Search Console

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. En el lado izquierdo, ve a "Configuración"
3. Scroll hasta "Google Analytics"
4. Conecta tu propiedad de GA4
5. Esto vinculará Search Console con Analytics

## Solución de Problemas

**No veo datos en GA:**
- Verifica que el ID sea correcto (empieza con G-)
- Abre Developer Tools > Console y busca errores
- Espera 24-48 horas para que GA procese datos iniciales
- Verifica en "Tiempo real" para ver datos instantáneos

**¿Datos privados?**
- GA no guarda info personal
- Los datos son anónimos por defecto
- Cumple con GDPR

## URLs de Referencia

- [Google Analytics Documentation](https://developers.google.com/analytics/devguides/collection/ga4)
- [GA4 Setup Guide](https://support.google.com/analytics/answer/9304153)
- [Tracking Events](https://developers.google.com/analytics/devguides/collection/ga4/events)
