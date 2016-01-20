angular.module('myApp')
    .service('AlertService' ,AlertService);

AlertService.$inject = ['toastr'];

function AlertService(toastr){
    this.showSuccess = showSuccess;
    this.showError = showError;

    function showSuccess(mensagem, titulo){
        titulo = !titulo ? "Ok" : titulo;
        toastr.success(mensagem, titulo);
    }

    function showError(mensagem, titulo){
        titulo = !titulo ? "Error" : titulo;
        toastr.error(mensagem, titulo);
    }
}
