import axios from 'axios';

const BASE_URL = 'https://ozqm91hsm0.execute-api.us-east-1.amazonaws.com/pathfinding-generator';

export const pathFindingService = {
  generateNewMap: async (algorithm: number, obstacleCount: number) => {
    try {
      const response = await axios.post(BASE_URL, 
        { 
          algorithm,
          obstacleCount,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error generating map:', error);
      throw error;
    }
  }
}; 