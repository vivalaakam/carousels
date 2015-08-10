function NotSelectedFilter() {
    return function(items, selected) {
        if (items) {
            return items.filter(function(item) {
                return selected.indexOf(item) === -1;
            });
        }
    };
}

function SelectedFilter() {
    return function(items, selected) {
        var s = selected.map(function(item) {
            return item.id;
        });
        if (s.length) {
            items = items.filter(function(item) {
                return item.type.filter(function(type) {
                    return s.indexOf(type) > -1;
                }).length > 0;
            });
        }

        return items;
    };
}

function checked() {
    return function(item) {
        return item ? '\u2713' : '\u2718';
    };
}

angular
    .module('app')
    .filter('NotSelectedFilter', NotSelectedFilter)
    .filter('SelectedFilter', SelectedFilter)
    .filter('checked', checked);
