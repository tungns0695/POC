import { ShipmentTable } from './ShipmentTable';
import { MockDataGenerator } from '../../utils/MockDataGenerator'

export default {
  title: 'ShipmentTable',
};

const data = MockDataGenerator(60);

export const Usage = () => <ShipmentTable data={data} />;
