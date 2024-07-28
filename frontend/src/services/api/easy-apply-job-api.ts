import axios from 'axios';

import { PUBLIC_API } from '@/constants/exports';

const easyApplyJobApi = axios.create({
  baseURL: `${PUBLIC_API}`,
});

export default easyApplyJobApi;
