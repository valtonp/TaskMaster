const {describe, it, expect, beforeEach} = require('@jest/globals');
const userService = require('../main/services/user.service');
const request = require('supertest');
const app = require('../main/app');
jest.mock('../main/services/user.service');

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const mockUsers = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    ];

    userService.getAllUsers.mockResolvedValue(mockUsers);

    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
    expect(userService.getAllUsers).toHaveBeenCalledTimes(1);

    
  });

  it('should return an empty array if no users exist', async () => {
    userService.getAllUsers.mockResolvedValue([]);

    const response = await request(app).get('/api/users');

    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it('should handle errors from user service', async () => {
    const errorMessage = 'Database error';
    userService.getAllUsers.mockRejectedValue(new Error(errorMessage));
  
    const response = await request(app).get('/api/users');
  
    expect(response.status).toBe(500);
  });
});

describe('POST /api/users', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should create a new user', async () => {
        const newUser = {
            name: 'John Doe',
            email: 'john@exemple.com',
            password: 'password123',
        }

        const createdUser = {
            id: 1,
            ...newUser,
        };
        userService.createUser.mockResolvedValue(createdUser);
        const response = await request(app).post('/api/users').send(newUser);
        expect(response.status).toBe(201);
        expect(userService.createUser).toHaveBeenCalledWith(newUser);
        expect(userService.createUser).toHaveBeenCalledTimes(1);
    });
});