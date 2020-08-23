function Polygon(sides) {
    this.sides = sides;

    this.perimeter = function() {
        let acc = this.sides.reduce((acc, value) => {
            return acc + value;
        } );

        return acc;
    }
}

let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());