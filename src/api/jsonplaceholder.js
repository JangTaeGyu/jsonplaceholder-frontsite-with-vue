import axios from '@/api';

export function fetchUsers() {
  return axios.get('users');
}

export function fetchUserDetails(userId) {
  return axios.get(`users/${userId}`);
}
