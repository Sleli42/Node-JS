<!DOCTYPE html>
<html>
<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
<body>
<div ng-app="" ng-init="points=[1,15,19,2,40]">

<p>The third result is {{ points[2] }}</p>
<p>
	OR : (with ng-bind)
</p>
<p>The third result is <span ng-bind="points[2]"></span></p>

</div> 
</body>
</html>s