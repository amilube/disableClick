# disableClick
Deshabilitar/habilitar elementos luego de un click en un *call to action* usando jQuery

Este es el css que evita los clicks sobre un elemento

```css
.not-clickable {
    pointer-events: none;
    cursor: default;
}
```

A continuación el objeto que se usa para manejar los clicks y deshabilitar un determinado elemento después de un click

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
        $(this.callToActionSelector).attr('disabled', 'disabled');
    };
    this.setEnableClick = function(){
        $(this.callToActionSelector).removeAttr('disabled');
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
    <link rel="stylesheet" href="archivo-con-los-estilos-para deshabilitar-los-clicks.css">
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

    <script src="jquery.js"></script>
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
