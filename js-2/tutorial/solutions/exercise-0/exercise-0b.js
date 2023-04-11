function calculateTotalPoints(items) {
    var pointsByType = {};

    // Iterate through each item in the array
    for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var itemType = item.type;
        var itemPoints = item.points;

        // Check if the item type already exists in the pointsByType object, and if it doesn't, set its initial value to 0
        if (!pointsByType[itemType]) {
            pointsByType[itemType] = 0;
        }

        // Add the points to the existing total for the item type
        pointsByType[itemType] += itemPoints;
    }

    return pointsByType;
}

let items = [
    { type: 'hat', points: 10 },
    { type: 'shoes', points: 20 },
    { type: 'hat', points: 5 },
    { type: 'scarf', points: 15 },
    { type: 'shoes', points: 10 }
];

var totalPointsByType = calculateTotalPoints(items);
console.log(totalPointsByType);