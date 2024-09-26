class Temperature {
    celsius;

    constructor(celsius) {
        this.celsius = celsius;
    }
    convertToF () {
        return this.celsius * 1.8 + 32;
    }
    convertToK () {
        return this.celsius + 273.15;
    }
}