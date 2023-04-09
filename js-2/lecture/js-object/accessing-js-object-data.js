let rmitColors = {
    red: '#E61E2A',
    yellow: '#FAC800',
    blue: '#000054'
}

// Two ways to access a value via a key
rmitColors['red']; // returns '#E61E2A'
rmitColors.red; // returns '#E61E2A'

// Not possible to use syntax . for a variable
let color = 'blue'
rmitColors[color]; // returns '#000054'
rmitColors.color // Not possible, returns undefined
