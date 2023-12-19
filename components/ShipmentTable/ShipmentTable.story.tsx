import { ShipmentTable } from './ShipmentTable';
import { MockDataGenerator } from '../../utils/MockDataGenerator'

export default {
  title: 'ShipmentTable',
};

const data = MockDataGenerator(100);

export const Usage = () => <ShipmentTable data={data} />;
