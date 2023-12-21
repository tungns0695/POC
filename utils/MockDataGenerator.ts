import { Coordinate } from '../types/Coordinate';
import { Shipment } from '../types/Shipment';

export function MockDataGenerator(recordCount: number): Shipment[] {
    const mockData: Shipment[] = [];

    for (let i = 1; i <= recordCount; i++) {
        const district = getRandomHanoiDistrict();
        const coordinate = getCoordinateForDistrict(district);

        const data: Shipment = {
            Id: i,
            WaybillNo: "IF" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
            CustomerName: generateVietnameseName(),
            Site: district,
            WaybillDate: getCurrentDate(),
            Group: "",
            Status: "Processing",
            Coordinate: coordinate,
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

function getCoordinateForDistrict(district: string): Coordinate {
    // You can adjust these values based on the actual coordinates of the districts
    const districtCoordinates: { [key: string]: Coordinate } = {
        'Ba Dinh': { long: 105.8198, lat: 21.0358 },
        'Hoan Kiem': { long: 105.8554, lat: 21.0285 },
        'Hai Ba Trung': { long: 105.8544, lat: 21.0071 },
        'Dong Da': { long: 105.8260, lat: 21.0122 },
        'Tay Ho': { long: 105.8231, lat: 21.0665 },
        'Cau Giay': { long: 105.7931, lat: 21.0285 },
        'Thanh Xuan': { long: 105.8119, lat: 20.9965 },
        'Hoang Mai': { long: 105.8731, lat: 20.9722 },
        'Long Bien': { long: 105.8882, lat: 21.0470 },
        'Nam Tu Liem': { long: 105.7655, lat: 21.0045 },
        'Bac Tu Liem': { long: 105.7660, lat: 21.0695 },
        'Ha Dong': { long: 105.7722, lat: 20.9524 },
        'Me Linh': { long: 105.7442, lat: 21.2121 },
        'Dong Anh': { long: 105.7814, lat: 21.1455 },
        'Soc Son': { long: 105.8542, lat: 21.2585 },
        'Gia Lam': { long: 105.9268, lat: 21.0291 },
        'Thanh Tri': { long: 105.8754, lat: 20.8677 },
        // Add coordinates for other districts...
    };

    return districtCoordinates[district] || getRandomHanoiCoordinate();
}

function generateVietnameseName(): string {
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