import { Button, Card } from 'antd';
import { motion } from 'framer-motion';

const Dashboard = () => (
  <motion.div
    className="p-6 space-y-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
    <Card className="shadow-md">
      <p className="text-gray-600">This is a card styled with Tailwind and Ant Design.</p>
      <Button type="primary" className="mt-2">
        Get Started
      </Button>
    </Card>
  </motion.div>
);

export default Dashboard;
