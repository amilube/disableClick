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
