import { Map } from './Map';
import { MockDataGenerator } from '../../utils/MockDataGenerator'

export default {
  title: 'ShipmentTable',
};

const data = MockDataGenerator(100);

export const Usage = () => <Map shipments={data} />;
