// Generic types

function modifiesTheList<T>(array: T[], value: T) {
    return array.map(() => value);
}

modifiesTheList([1, 2, 3], 1);