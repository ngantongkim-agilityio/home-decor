import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = process.env.EXPO_PUBLIC_BASE_URL;
const PUBLIC_KEY = process.env.EXPO_PUBLIC_PUBLISHABLE_API_KEY;

const defaultOptions = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${PUBLIC_KEY}`,
  },
};

const instanceAxios = axios.create(defaultOptions);

export const GET = async <T>(
  url: string,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await instanceAxios.get(url, config);
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }

    throw new Error('Something was wrong');
  }
};

export const POST = async <T>(
  url: string,
  payload: unknown,
  config?: AxiosRequestConfig,
) => {
  try {
    const res: AxiosResponse<T> = await instanceAxios.post(
      url,
      payload,
      config,
    );
    return res.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error('Something was wrong');
  }
};

export const PATCH = async <T>(
  url: string,
  payload: unknown,
  config?: AxiosRequestConfig,
): Promise<T> => {
  try {
    const res: AxiosResponse<T> = await instanceAxios.patch(
      url,
      payload,
      config,
    );

    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    }
    throw new Error('Something was wrong');
  }
};
