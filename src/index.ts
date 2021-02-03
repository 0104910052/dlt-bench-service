import { initServer } from './system/server';
import './system/jobs/fetch-scheduler';

const bootstrapServer = async () => {
  initServer();
};

bootstrapServer();

