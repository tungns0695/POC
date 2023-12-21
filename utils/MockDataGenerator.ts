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

function getCoordinateForDistrict(district: string): any {
    const { minLongitude, maxLongitude, minLatitude, maxLatitude } = getDistrictBoundaries(district);
    return getRandomCoordinateWithinBounds(minLongitude, maxLongitude, minLatitude, maxLatitude);
}

function getRandomCoordinateWithinBounds(minLongitude: number, maxLongitude: number, minLatitude: number, maxLatitude: number): Coordinate {
    return {
        long: getRandomCoordinate(minLongitude, maxLongitude),
        lat: getRandomCoordinate(minLatitude, maxLatitude),
    };
}

function getDistrictBoundaries(district: string): { minLongitude: number, maxLongitude: number, minLatitude: number, maxLatitude: number } {
    // Define boundaries for each district as needed
    const districtBoundaries: { [key: string]: { minLongitude: number, maxLongitude: number, minLatitude: number, maxLatitude: number } } = {
        'Ba Dinh': { minLongitude: 105.81, maxLongitude: 105.83, minLatitude: 21.02, maxLatitude: 21.05 },
        'Hoan Kiem': { minLongitude: 105.85, maxLongitude: 105.86, minLatitude: 21.01, maxLatitude: 21.03 },
        'Hai Ba Trung': { minLongitude: 105.854, maxLongitude: 105.862, minLatitude: 20.995, maxLatitude: 21.017 },
        'Dong Da': { minLongitude: 105.823, maxLongitude: 105.830, minLatitude: 20.999, maxLatitude: 21.019 },
        'Tay Ho': { minLongitude: 105.818, maxLongitude: 105.832, minLatitude: 21.057, maxLatitude: 21.073 },
        'Cau Giay': { minLongitude: 105.787, maxLongitude: 105.800, minLatitude: 21.018, maxLatitude: 21.038 },
        'Thanh Xuan': { minLongitude: 105.800, maxLongitude: 105.818, minLatitude: 20.988, maxLatitude: 21.011 },
        'Hoang Mai': { minLongitude: 105.863, maxLongitude: 105.883, minLatitude: 20.948, maxLatitude: 20.980 },
        'Long Bien': { minLongitude: 105.870, maxLongitude: 105.900, minLatitude: 21.030, maxLatitude: 21.060 },
        'Nam Tu Liem': { minLongitude: 105.752, maxLongitude: 105.778, minLatitude: 20.993, maxLatitude: 21.010 },
        'Bac Tu Liem': { minLongitude: 105.761, maxLongitude: 105.776, minLatitude: 21.062, maxLatitude: 21.079 },
        'Ha Dong': { minLongitude: 105.756, maxLongitude: 105.783, minLatitude: 20.939, maxLatitude: 20.961 },
        'Me Linh': { minLongitude: 105.724, maxLongitude: 105.769, minLatitude: 21.190, maxLatitude: 21.223 },
        'Dong Anh': { minLongitude: 105.768, maxLongitude: 105.798, minLatitude: 21.128, maxLatitude: 21.155 },
        'Soc Son': { minLongitude: 105.834, maxLongitude: 105.878, minLatitude: 21.219, maxLatitude: 21.295 },
        'Gia Lam': { minLongitude: 105.893, maxLongitude: 105.960, minLatitude: 21.001, maxLatitude: 21.052 },
        'Thanh Tri': { minLongitude: 105.850, maxLongitude: 105.898, minLatitude: 20.842, maxLatitude: 20.892 },
    };

    return districtBoundaries[district] || { minLongitude: 105.7, maxLongitude: 106.0, minLatitude: 20.8, maxLatitude: 21.1 };
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