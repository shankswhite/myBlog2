import axios from 'axios';

const BASE_URL = 'https://[your-api-id].execute-api.[your-region].amazonaws.com/[stage]';
// Example: https://abc123def.execute-api.us-east-1.amazonaws.com/prod

export const pathFindingService = {
  generateNewMap: async (algorithm: number, obstacleCount: number) => {
    try {
      const response = await axios.post(`${BASE_URL}/generate-map`, { 
        algorithm,
        obstacleCount,
      });
      return response.data;
    } catch (error) {
      console.error('Error generating map:', error);
      throw error;
    }
  },

  getPathInfo: async (algorithm: number) => {
    try {
      const response = await axios.get(`${BASE_URL}/path-info/${algorithm}`);
      return response.data;
    } catch (error) {
      console.error('Error getting path info:', error);
      throw error;
    }
  }
}; 