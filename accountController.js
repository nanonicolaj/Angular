function accountController($scope) {
    $scope.accountType = '';
    $scope.owner = '';
    $scope.balance = 0;
    $scope.transactions = [];
    $scope.accounts = [];
    $scope.createAccount = function(name) {
        $scope.accounts.push(name);
    }
    $scope.changeBalance = function(amount) {
        if($scope.option == 'withdraw') {
            $scope.transactions.push('-'+amount);
            $scope.balance = $scope.balance - amount;
        } else if ($scope.option == 'deposit') {
            $scope.transactions.push(amount);
            $scope.balance = $scope.balance + amount;
        }
    }
    $scope.getBalance = function() {
        return $scope.balance;
    };
}
