class ElectricAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPluggedIn = false;
    }

    turnOn() {
        this.isPluggedIn = true;
        console.log(`${this.name}: включено. Потребляемая мощность: ${this.power} Вт.`);
    }

    turnOff() {
        this.isPluggedIn = false;
        console.log(`${this.name}: выключено.`);
    }
}

class DeskLamp extends ElectricAppliance {
    constructor(brightness) {
        super('Настольная лампа', 30);
        this.brightness = brightness;
    }
}

class Computer extends ElectricAppliance {
    constructor(type, brand) {
        super('Компьютер', 500);
        this.type = type;
        this.brand = brand;
    }
}

const lamp = new DeskLamp(50);
const computerDevice = new Computer('Ноутбук', 'Dell');

lamp.turnOn();
computerDevice.turnOn();

function calculateTotalPower(...appliances) {
    let totalPower = 0;
    appliances.forEach(appliance => {
        if (appliance.isPluggedIn) {
            totalPower += appliance.power;
        }
    });
    return totalPower;
}

console.log(`Суммарная потребляемая мощность: ${calculateTotalPower(lamp, computerDevice)} Вт.`);
