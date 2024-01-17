function ElectricAppliance(name, power) {
    this.name = name;
    this.power = power;
    this.isPluggedIn = false;
}

ElectricAppliance.prototype.turnOn = function () {
    this.isPluggedIn = true;
    console.log(`${this.name}: включено. Потребляемая мощность: ${this.power} Вт.`);
};

ElectricAppliance.prototype.turnOff = function () {
    this.isPluggedIn = false;
    console.log(`${this.name}: выключено.`);
};

function DeskLamp(brightness) {
    ElectricAppliance.call(this, 'Настольная лампа', 30);
    this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

function Computer(type, brand) {
    ElectricAppliance.call(this, 'Компьютер', 500);
    this.type = type;
    this.brand = brand;
}

Computer.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype.constructor = Computer;

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
