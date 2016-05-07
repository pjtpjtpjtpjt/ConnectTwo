angular.module('connecttwoapp', [])
    .controller('token-controller', function($scope) {

    $scope.headerCollection = document.getElementsByTagName('th')
    $scope.rowCollection = document.getElementsByTagName('tr')
    $scope.cellCollection = document.getElementsByTagName('td')

    $scope.headersArr = [].slice.call($scope.headerCollection);
    $scope.rowsArr = [].slice.call($scope.rowCollection);
    $scope.cellsArr = [].slice.call($scope.cellCollection);    

    
    $scope.columnClick = function(){
        $scope.colIndex = document.activeElement.parentElement.cellIndex;
        
        for(i = 0; i < 36; i +=7){
            
            console.log($scope.cellsArr[$scope.colIndex + i].innerText);
            
            if($scope.cellsArr[$scope.colIndex + i].innerText === '' && i === 35){
                $scope.cellsArr[$scope.colIndex + i].innerText = "connect"
            }
          
        }
        
    }
    


})