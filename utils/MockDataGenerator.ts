import { Coordinate } from '../types/Coordinate';
import { Shipment } from '../types/Shipment';

export function MockDataGenerator(recordCount: number): Shipment[] {
    

    const mockData: Shipment[] = [];
    for (let i = 1; i <= recordCount; i++) {
        const data: Shipment = {
            Id: i,
            WaybillNo: "IF" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
            CustomerName: generateVietnameseName(),
            Site: getRandomHanoiDistrict(),
            WaybillDate: getCurrentDate(),
            Group: "",
            Status: "Processing",
            Coordinate: getRandomHanoiCoordinate(),
            CustomerReference: "SOCAC" + Math.floor(Math.random() * 100000).toString().padStart(5, '0'),
            GroupType: "",
            CBM: (Math.floor(Math.random() * 30) + 1) + "m3",
            Weight: (Math.random() * 50).toFixed(2) + "kg"
        };

        mockData.push(data);
    }
    return mockData;
}

const hanoiDistricts = [
    'Ba Dinh',
    'Hoan Kiem',
    'Hai Ba Trung',
    'Dong Da',
    'Tay Ho',
    'Cau Giay',
    'Thanh Xuan',
    'Hoang Mai',
    'Long Bien',
    'Nam Tu Liem',
    'Bac Tu Liem',
    'Ha Dong',
    'Me Linh',
    'Dong Anh',
    'Soc Son',
    'Gia Lam',
    'Thanh Tri'
];

function generateVietnameseName(): string {
    // You can replace this function with a more sophisticated one to generate Vietnamese names
    const firstNames = ["Nguyen Van", "Tran Trung", "Le Thi", "Pham Hoang", "Hoang Van"];
    const lastNames = ["Van", "Thi", "Duc", "Anh", "My"];
    const fullName = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
    return fullName;
}

function getCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getRandomHanoiDistrict(): string {
    return hanoiDistricts[Math.floor(Math.random() * hanoiDistricts.length)];
}

function getRandomHanoiCoordinate(): Coordinate {
    // Hanoi city boundaries
    const minLongitude = 105.7;
    const maxLongitude = 106.0;
    const minLatitude = 20.8;
    const maxLatitude = 21.1;

    return {
        long: getRandomCoordinate(minLongitude, maxLongitude),
        lat: getRandomCoordinate(minLatitude, maxLatitude),
    };
}

function getRandomCoordinate(min: number, max: number): number {
    return parseFloat((Math.random() * (max - min) + min).toFixed(6));
}