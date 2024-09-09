# Konsep SOLID dalam OOP

Prinsip **SOLID** membantu membuat kode lebih modular, mudah diperluas, dan dipelihara. Di sini disertakan contoh-contoh yang **benar** dan **salah** dalam menerapkan setiap prinsip.

## 1. Single Responsibility Principle (SRP)

**Prinsip**: Setiap class harus hanya memiliki satu alasan untuk berubah, yaitu satu tanggung jawab spesifik.

### Salah

```javascript
class Laundry {
  washAndDry() {
    console.log("Washing and drying clothes");
  }
}
```

### Benar

```javascript
class Washing {
  wash() {
    console.log("Washing clothes");
  }
}

class Drying {
  dry() {
    console.log("Drying clothes");
  }
}
```

## Open/Closed Principle (OCP)

**Prinsip**: Class harus terbuka untuk diperluas tetapi tertutup untuk modifikasi.

### Salah

```javascript
class CarEntertainmentSystem {
  playMusic() {
    console.log("Playing music");
  }

  playVideo() {
    // Ditambahkan langsung ke class yang sudah ada
    console.log("Playing video");
  }
}
```

### Benar

```javascript
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
```

## Liskov Substitution Principle (LSP)

**Prinsip:** Subclass harus dapat menggantikan superclass tanpa mengubah cara kerja program.

### Salah

```javascript
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins cannot fly");
  }
}
```

### Benar

```javascript
class Animal {
  move() {
    console.log("Moving");
  }
}

class Fish extends Animal {
  move() {
    console.log("Swimming");
  }
}
```

## Interface Segregation Principle (ISP)

**Prinsip:** Klien tidak boleh dipaksa untuk mengimplementasikan antarmuka yang tidak mereka butuhkan.

### Salah

```javascript
class Machine {
  slice() {}
  mix() {}
  blend() {}
}

class Blender extends Machine {
  blend() {
    console.log("Blending");
  }

  slice() {
    throw new Error("Not needed");
  }

  mix() {
    throw new Error("Not needed");
  }
}
```

### Benar

```javascript
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
```

## Dependency Inversion Principle (DIP)

**Prinsip**: Bergantung pada abstraksi, bukan pada implementasi konkret.

### Salah

```javascript
class House {
  constructor() {
    this.electricitySource = new PlnElectricity();
  }

  turnOnLights() {
    this.electricitySource.supplyPower();
  }
}
```

### Benar

```javascript
class House {
  constructor(electricitySource) {
    this.electricitySource = electricitySource;
  }

  turnOnLights() {
    this.electricitySource.supplyPower();
  }
}
```

## Kesimpulan

Dengan memahami dan menerapkan SOLID, kita dapat membangun sistem yang lebih mudah dipelihara dan diubah tanpa merusak sistem yang ada. Ini membantu kita menghasilkan kode yang lebih modular, efisien, dan scalable.
