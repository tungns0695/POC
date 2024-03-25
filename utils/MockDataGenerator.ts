import { Coordinate } from '../types/Coordinate';
import { Shipment } from '../types/Shipment';

export function MockDataGenerator(recordCount: number): Shipment[] {
    const mockData: Shipment[] = [];
    const fixed = [
        {
            "Lat": "14.227170",
            "Long": "100.712660",
            "Id": "2100000029",
            "District": " อ.วังน้อย",
            "Name": "HOMEPRO"
        },
        {
            "Lat": "18.801480",
            "Long": "98.965500",
            "Id": "2100000030",
            "District": " อ.เมือง",
            "Name": "NIYOM PANICH"
        },
        {
            "Lat": "18.801480",
            "Long": "98.965500",
            "Id": "2100000039",
            "District": " อ.เมือง",
            "Name": "NIYOM PANICH"
        },
        {
            "Lat": "18.589050",
            "Long": "99.011020",
            "Id": "2100000041",
            "District": " อ.เมืองลำพูน",
            "Name": "NIYOM PANICH"
        },
        {
            "Lat": "18.589050",
            "Long": "99.011020",
            "Id": "2100000042",
            "District": " อ.เมืองลำพูน",
            "Name": "NIYOM PANICH"
        },
        {
            "Lat": "17.160970",
            "Long": "104.146840",
            "Id": "2100000053",
            "District": " อ.เมืองสกลนคร",
            "Name": "HITECH SAKONNAKORN"
        },
        {
            "Lat": "17.160970",
            "Long": "104.146840",
            "Id": "2100000056",
            "District": " อ.เมืองสกลนคร",
            "Name": "HITECH SAKONNAKORN"
        },
        {
            "Lat": "16.810260",
            "Long": "100.257080",
            "Id": "2100000057",
            "District": " อ.เมืองพิษณุโลก",
            "Name": "RACHA RIMNAM"
        },
        {
            "Lat": "13.719040",
            "Long": "100.595710",
            "Id": "2100000058",
            "District": " เขตวัฒนา",
            "Name": "SINSOMBOON"
        },
        {
            "Lat": "13.779110",
            "Long": "100.625220",
            "Id": "2100000079",
            "District": " เขตคลองเตย",
            "Name": "FUTURE WORLD"
        },
        {
            "Lat": "12.609508",
            "Long": "102.10338",
            "Id": "2100000081",
            "District": " อ.เมืองจันทบุรี",
            "Name": "THE BEST 1"
        },
        {
            "Lat": "13.607126",
            "Long": "100.707883",
            "Id": "2100000088",
            "District": " อ.บางพลี",
            "Name": "POWER BUY"
        },
        {
            "Lat": "13.607126",
            "Long": "100.707883",
            "Id": "2100000117",
            "District": " อ.บางพลี",
            "Name": "POWER BUY"
        },
        {
            "Lat": "13.607126",
            "Long": "100.707883",
            "Id": "2100000118",
            "District": " อ.บางพลี",
            "Name": "POWER BUY"
        },
        {
            "Lat": "17.15687",
            "Long": "104.143249",
            "Id": "2100000120",
            "District": " อ.เมืองสกลนคร",
            "Name": "HITECH SAKONNAKORN"
        },
        {
            "Lat": "14.985579",
            "Long": "103.099271",
            "Id": "2100000126",
            "District": " อ.เมืองบุรีรัมย์",
            "Name": "PIEBPROM ELECTRIC"
        },
        {
            "Lat": "16.292907",
            "Long": "103.979608",
            "Id": "2100000131",
            "District": " อ.โพนทอง",
            "Name": "FULL HOUSE STORE"
        },
        {
            "Lat": "15.003428",
            "Long": "102.060674",
            "Id": "2100000134",
            "District": " อ.เมืองนครราชสีมา",
            "Name": "TAIFAH CITY"
        },
        {
            "Lat": "17.498873",
            "Long": "101.725026",
            "Id": "2100000136",
            "District": " อ.เมืองเลย",
            "Name": "SRITHAM"
        },
        {
            "Lat": "13.718673",
            "Long": "100.560278",
            "Id": "2100000164",
            "District": " เขตวัฒนา",
            "Name": "SINSOMBOON"
        },
        {
            "Lat": "13.718673",
            "Long": "100.560278",
            "Id": "2100000166",
            "District": " เขตวัฒนา",
            "Name": "SINSOMBOON"
        },
        {
            "Lat": "13.718673",
            "Long": "100.560278",
            "Id": "2100000173",
            "District": " เขตวัฒนา",
            "Name": "SINSOMBOON"
        },
        {
            "Lat": "13.60821",
            "Long": "100.682796",
            "Id": "2100000175",
            "District": "  อ.บางเสาธง",
            "Name": "SINSOMBOON"
        },
        {
            "Lat": "16.172261",
            "Long": "103.301186",
            "Id": "2100000179",
            "District": "  อ.เมืองมหาสารคาม",
            "Name": "OWE PENG HONG"
        },
        {
            "Lat": "13.097431",
            "Long": "99.952887",
            "Id": "2100000195",
            "District": "  อ.เมืองเพชรบุรี",
            "Name": "TAYANG"
        },
        {
            "Lat": "13.96488",
            "Long": "100.726963",
            "Id": "2100000199",
            "District": "  อ.ลำลูกกา",
            "Name": "DO HOME"
        },
        {
            "Lat": "13.96488",
            "Long": "100.726963",
            "Id": "2100000200",
            "District": "  อ.ลำลูกกา",
            "Name": "DO HOME"
        },
        {
            "Lat": "13.96488",
            "Long": "100.726963",
            "Id": "2100000201",
            "District": "  อ.ลำลูกกา",
            "Name": "DO HOME"
        },
        {
            "Lat": "12.909557",
            "Long": "99.906376",
            "Id": "2100000221",
            "District": " อ.ท่ายาง",
            "Name": "TAYANG"
        },
        {
            "Lat": "12.909557",
            "Long": "99.906376",
            "Id": "2100000225",
            "District": " อ.ท่ายาง",
            "Name": "TAYANG"
        },
        {
            "Lat": "13.097431",
            "Long": "99.952887",
            "Id": "2100000227",
            "District": "  อ.เมืองเพชรบุรี",
            "Name": "TAYANG"
        },
        {
            "Lat": "13.807607",
            "Long": "100.556824",
            "Id": "2100000231",
            "District": " เขตจตุจักร",
            "Name": "SAENGCHAI ELECTRONIC"
        },
        {
            "Lat": "13.807607",
            "Long": "100.556824",
            "Id": "2100000232",
            "District": " เขตจตุจักร",
            "Name": "SAENGCHAI ELECTRONIC"
        },
        {
            "Lat": "13.96488",
            "Long": "100.726963",
            "Id": "2100000241",
            "District": "  อ.ลำลูกกา",
            "Name": "DO HOME"
        },
        {
            "Lat": "13.60821",
            "Long": "100.682796",
            "Id": "2100000249",
            "District": "  อ.บางเสาธง",
            "Name": "SINSOMBOON"
        },
        {
            "Lat": "13.54817175",
            "Long": "100.2744638",
            "Id": "2100000318",
            "District": " อ.เมืองสมุทรสาคร",
            "Name": "SAKORN RADIO"
        },
        {
            "Lat": "13.311957375",
            "Long": "101.112440875",
            "Id": "2100000333",
            "District": " อ.บ้านบึง",
            "Name": "SAHAPAT TV"
        },
        {
            "Lat": "18.779839",
            "Long": "100.773501",
            "Id": "2100000347",
            "District": "  อ.เมืองน่าน",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "20.139548",
            "Long": "99.857142",
            "Id": "2100000353",
            "District": "  อ.แม่จัน",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "19.357455",
            "Long": "99.831924",
            "Id": "2100000355",
            "District": "  อ.แม่ใจ",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "19.7073634",
            "Long": "100.181481",
            "Id": "2100000369",
            "District": "  อ.เทิง",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "14.227170",
            "Long": "100.712660",
            "Id": "2100000398",
            "District": " อ.วังน้อย",
            "Name": "HOMEPRO"
        },
        {
            "Lat": "14.227170",
            "Long": "100.712660",
            "Id": "2100000403",
            "District": " อ.วังน้อย",
            "Name": "HOMEPRO"
        },
        {
            "Lat": "14.227170",
            "Long": "100.712660",
            "Id": "2100000405",
            "District": " อ.วังน้อย",
            "Name": "HOMEPRO"
        },
        {
            "Lat": "14.075755",
            "Long": "100.509242",
            "Id": "2100009281",
            "District": "  อ.สามโคก",
            "Name": "SIAM GLOBAL HOUSE"
        },
        {
            "Lat": "14.075755",
            "Long": "100.509242",
            "Id": "2100009284",
            "District": "  อ.สามโคก",
            "Name": "SIAM GLOBAL HOUSE"
        },
        {
            "Lat": "14.075755",
            "Long": "100.509242",
            "Id": "2100009286",
            "District": "  อ.สามโคก",
            "Name": "SIAM GLOBAL HOUSE"
        },
        {
            "Lat": "13.707435",
            "Long": "100.759748",
            "Id": "2100009287",
            "District": "  อ.บางพลี",
            "Name": "SIAM GLOBAL HOUSE"
        },
        {
            "Lat": "13.707435",
            "Long": "100.759748",
            "Id": "2100009292",
            "District": "  อ.บางพลี",
            "Name": "SIAM GLOBAL HOUSE"
        },
        {
            "Lat": "13.707435",
            "Long": "100.759748",
            "Id": "2100009293",
            "District": "  อ.บางพลี",
            "Name": "SIAM GLOBAL HOUSE"
        },
        {
            "Lat": "20.4034615",
            "Long": "99.8855755",
            "Id": "2100010166",
            "District": "  อ.แม่สาย",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "20.4034615",
            "Long": "99.8855755",
            "Id": "2100010167",
            "District": "  อ.แม่สาย",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "18.8885809",
            "Long": "100.305667",
            "Id": "2100010169",
            "District": "  อ.เชียงม่วน",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "19.7491564",
            "Long": "99.1433550",
            "Id": "2100010170",
            "District": "  อ.ไชยปราการ",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "19.7491564",
            "Long": "99.1433550",
            "Id": "2100010171",
            "District": "  อ.ไชยปราการ",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "20.2943481",
            "Long": "100.127379",
            "Id": "2100010172",
            "District": "  อ.เชียงแสน",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "19.7099101",
            "Long": "100.254544",
            "Id": "2100010174",
            "District": "  อ.เทิง",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "19.9165054",
            "Long": "99.8814915",
            "Id": "2100010176",
            "District": " อ.เมืองเชียงราย",
            "Name": "SINTHANEE"
        },
        {
            "Lat": "13.7171285",
            "Long": "100.560492",
            "Id": "2100010182",
            "District": " เขตคลองเตย",
            "Name": "FUTURE WORLD"
        },
        {
            "Lat": "14.8233856",
            "Long": "104.034640",
            "Id": "2100010185",
            "District": "อ.ปรางค์กู่",
            "Name": "TANG PANICH"
        }
    ]

    for (let i = 1; i < recordCount; i++) {
        const data: Shipment = {
            Id: i,
            WaybillNo: "IF" + Math.floor(Math.random() * 1000000).toString().padStart(6, '0'),
            CustomerName: fixed[i].Name,
            Site: fixed[i].District,
            WaybillDate: "2023-09-04",
            Group: "",
            Status: "Processing",
            Coordinate: {
                long: Number(fixed[i]?.Long),
                lat: Number(fixed[i]?.Lat)
            },
            CustomerReference: "SOCAC" + Math.floor(Math.random() * 100000).toString().padStart(5, '0'),
            GroupType: "",
            CBM: (Math.floor(Math.random() * 30) + 1) + "m3",
            Weight: (Math.random() * 50).toFixed(2) + "kg"
        };

        mockData.push(data);
    }

    return mockData;
}