# disableClick
**Deshabilitar/habilitar elementos luego de un click en un *call to action* usando jQuery**

El objetivo de **disableClicks** es solucionar el comportamiento inapropiado al guardar formularios en algunos navegadores (como Google Chrome) o en conexiones a Internet lentas.
En esas condiciones, cuando el usuario final presiona múltiples veces sobre un botón de submit (u otro call to action), se gauardan múltiples registros de los datos del formulario en la base de datos. 

## srtyles.css ##
Este es el css que evita los clicks sobre un elemento

```css
.not-clickable {
    pointer-events: none;
    cursor: default;
}
```
## disableClicks.js ##
El objeto DisableClick se usa para manejar los clicks y deshabilitar un determinado elemento después de un click

```javascript
/** * Habilita/deshabilita elementos en función de un click en un 'call to action'.
* @constructor
* @param {object} options
*/
DisableClick = function( options ) {
    this.callToActionSelector = options.callToActionSelector;
    this.targetSelector = options.targetSelector;
    this.callToActionOnClick = function() {
        itself = this;
        $(this.callToActionSelector).on("click", function( event ) {
            itself.setDisableClick();
        })
    }
    this.setDisableClick = function() {
        $(this.targetSelector).addClass('not-clickable');
    };
    this.setEnableClick = function() {
        $(this.targetSelector).removeClass('not-clickable')
    };
    this.callToActionOnClick();
}
```

A continuación un ejemplo de implementación

```html
<!DOCTYPE html>
<head>
    <title>Titulo</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <form id="formulario"
    action="."
    method="POST"
    role="form">
        <legend>Formulario</legend>
        <div class="form-group">
            <label for="nombre">Nombre</label>
            <input type="text"
            name="nombre"
            class="form-control"
            id="nombre">
        </div>
        <button type="submit"
        id="btn-guardar"
        class="btn btn-primary">
            Guardar
        </button>
    </form>

    <script src="js/jquery.js"></script>
    <script src="js/disableClicks.js"></script>
    <script>
        $('document').ready(function () {
            var options = {
                callToActionSelector: "#guardar",
                targetSelector: "#formulario"
            }
            disableClick = DisableClick(options);
            if (condicion_para_habilitar_de_nuevo_el_click) {
                disableClick.setEnableClick();
            }
        });
    </script>
</body>

</html>
```
