/**
 * Created by Prodata on 11/01/2016.
 */
(function(){

    angular.module('myApp')
        .controller('indexController', indexController);

    indexController.$inject = ['$scope', '$timeout', 'AlertService'];

    function indexController($scope, $timeout, AlertService){
        $scope.listaDePessoas = [];
        $scope.entidade = {};
        $scope.salvar = salvar;
        $scope.clear = clear;
        $scope.excluir = excluir;
        $scope.edit = edit;
        $scope.getRowStyle = getRowStyle;

        iniciar();

        function salvar(){
            setTouchedInputs(true);
            $scope.listaDePessoas.push($scope.entidade);

            clear();

            AlertService.showSuccess("Salvo com sucesso!!");
        };

        function iniciar(){
            $scope.gridOptions = {
                data: 'listaDePessoas',
                columnDefs: [
            {field:"nome", displayName: "Nome"},
            {field:"sobrenome", displayName: "Sobrenome"},
            {field:"nascimento", displayName: "Data de Nascimento", cellTemplate: 'app/templates/date-cell-template.html'},
            {field: 'editar', displayName: '', cellTemplate:'app/templates/edit-button-cell-template.html', width: '30'}
        ],
                rowTemplate: 'app/templates/row-template.html'
        };
    }

    function excluir(entidade){
        $scope.listaDePessoas.splice(entidade);

        clear();

        AlertService.showSuccess("Excluido com sucesso!!");
    };

    function clear(){
            $scope.entidade = {};

            $timeout(function(){
                setTouchedInputs(false);
            }, 100);
        };

        function setTouchedInputs(isTouched){
            if(isTouched){
                angular.forEach($scope.formPessoa.$error, function(values){
                    angular.forEach(values, function(item){
                        item.$setTouched();
                    });
                });
            }else{
                angular.forEach($scope.formPessoa.$error, function(values){
                    angular.forEach(values, function(item){
                        item.$setUntouched();
                    });
                });
            }
        }

        function edit(linhaSelecionada){
            $scope.entidade = linhaSelecionada;
        }

        function getRowStyle(){
            var style = {};

            style.backgroundColor = 'blue';
            style.color = 'white';

            return style;
        }

    };

})();