// Single Responsibility Principle (SRP)
// Salah: Class Laundry melakukan dua tugas sekaligus, mencuci dan mengeringkan
class Laundry {
    washAndDry() {
        console.log('Washing and drying clothes');
    }
}

// Benar: Pisahkan tanggung jawab ke dalam class terpisah
class Washing {
    wash() {
        console.log('Washing clothes');
    }
}

class Drying {
    dry() {
        console.log('Drying clothes');
    }
}

// Open/Closed Principle (OCP)
// Salah: Mengubah class CarEntertainmentSystem untuk menambahkan fungsionalitas baru
class CarEntertainmentSystem {
    playMusic() {
        console.log("Playing music");
    }

    playVideo() { // Ditambahkan langsung ke class yang sudah ada (salah)
        console.log("Playing video");
    }
}

// Benar: Gunakan inheritance atau extension untuk menambah fungsionalitas baru
class CarEntertainmentSystem {
    playMusic() {
        console.log("Playing music");
    }
}

class AdvancedCarEntertainmentSystem extends CarEntertainmentSystem {
    playVideo() {
        console.log("Playing video");
    }
}

// Liskov Substitution Principle (LSP)
// Salah: Subclass tidak bisa menggantikan superclass-nya
class Bird {
    fly() {
        console.log("Flying");
    }
}

class Penguin extends Bird {
    fly() { // Salah karena penguin tidak bisa terbang
        throw new Error("Penguins cannot fly");
    }
}

// Benar: Subclass harus bisa menggantikan superclass tanpa mengubah perilaku program
class Animal {
    move() {
        console.log("Moving");
    }
}

class Fish extends Animal {
    move() { // Mengganti method dengan behavior yang valid
        console.log("Swimming");
    }
}

// Interface Segregation Principle (ISP)
// Salah: Memaksa class implementasikan method yang tidak diperlukan
class Machine {
    slice() { }
    mix() { }
    blend() { }
}

class Blender extends Machine {
    blend() {
        console.log("Blending");
    }
    slice() { // Tidak dibutuhkan oleh Blender, tapi tetap harus diimplementasikan
        throw new Error("Not needed");
    }
    mix() { // Tidak dibutuhkan oleh Blender, tapi tetap harus diimplementasikan
        throw new Error("Not needed");
    }
}

// Benar: Pisahkan menjadi antarmuka yang lebih spesifik
class Slicer {
    slice() {
        console.log("Slicing");
    }
}

class Blender {
    blend() {
        console.log("Blending");
    }
}

// Dependency Inversion Principle (DIP)
// Salah: Class House bergantung langsung pada low-level module (PLN dan Generator)
class House {
    constructor() {
        this.electricitySource = new PlnElectricity();
    }

    turnOnLights() {
        this.electricitySource.supplyPower();
    }
}

// Benar: Bergantung pada abstraksi daripada implementasi konkret
class House {
    constructor(electricitySource) {
        this.electricitySource = electricitySource;
    }

    turnOnLights() {
        this.electricitySource.supplyPower();
    }
}

class PlnElectricity {
    supplyPower() {
        console.log("Supplying power from PLN");
    }
}

class GeneratorElectricity {
    supplyPower() {
        console.log("Supplying power from Generator");
    }
}

const houseWithPln = new House(new PlnElectricity());
houseWithPln.turnOnLights();  // Output: Supplying power from PLN
