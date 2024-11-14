import axios from 'axios';

const BASE_URL = 'https://[your-api-id].execute-api.[your-region].amazonaws.com/[stage]';

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
  }
}; 