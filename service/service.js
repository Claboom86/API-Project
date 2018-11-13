"use strict";

function Service($http) {
  const self = this;
  self.searchRecipe = (recipe, healthy, restrictions) => {
    return $http({
      method: "GET",
      url: `https://api.edamam.com/search?q=${recipe}&app_id=dae981e7&app_key=72c4ff67ecb8e8926f6914264d2e41bd&diet=${healthy}&health=${restrictions}`
    }).then((data) => {
      self.lists = data.data.hits;
      for (let i = 0; i < self.lists.length; i++) {
        self.ingredients = self.lists[i].recipe.ingredientLines;
      }
        return self.lists;

    })
  };

  

}

angular
  .module("App")
  .service("Service", Service)