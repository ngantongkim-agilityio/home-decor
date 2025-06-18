import axios from 'axios';
import { GET, POST, PATCH } from '..';

jest.mock('axios', () => {
  const mAxiosInstance = { get: jest.fn(), post: jest.fn(), patch: jest.fn() };
  return {
    create: jest.fn(() => mAxiosInstance),
    isAxiosError: jest.fn(),
    AxiosError: jest.fn(),
  };
});

describe('Services', () => {
  const mockEndpoint = 'test-endpoint';
  const mockPayload = { key: 'value' };
  const mockConfig = {
    headers: {
      'X-Auth-Key': 'mock-auth-key',
    },
  };
  const mockResponse = { data: { success: true } };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should make a GET request successfully', async () => {
    (axios.create().get as jest.Mock).mockResolvedValue(mockResponse);

    const result = await GET(mockEndpoint, mockConfig);

    expect(axios.create().get).toHaveBeenCalledWith(mockEndpoint, mockConfig);
    expect(result).toEqual(mockResponse.data);
  });

  it('Should handle error response with GET request is failed', async () => {
    const mockError = {
      response: {
        status: 404,
        data: { message: 'Resource not found' },
      },
    };
    (axios.create().get as jest.Mock).mockRejectedValue(mockError);

    await expect(GET(mockEndpoint, mockConfig)).rejects.toThrow(
      'Something was wrong',
    );
  });

  it('Should make a POST request successfully', async () => {
    (axios.create().post as jest.Mock).mockResolvedValue(mockResponse);

    const result = await POST(mockEndpoint, mockPayload, mockConfig);

    expect(axios.create().post).toHaveBeenCalledWith(
      mockEndpoint,
      mockPayload,
      mockConfig,
    );
    expect(result).toEqual(mockResponse.data);
  });

  it('Should make a PATCH request successfully', async () => {
    (axios.create().patch as jest.Mock).mockResolvedValue(mockResponse);

    const result = await PATCH(mockEndpoint, mockPayload, mockConfig);

    expect(axios.create().patch).toHaveBeenCalledWith(
      mockEndpoint,
      mockPayload,
      mockConfig,
    );
    expect(result).toEqual(mockResponse.data);
  });
});
