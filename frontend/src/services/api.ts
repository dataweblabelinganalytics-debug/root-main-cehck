import { ContactFormData, ApiResponse } from '../types';

const API_BASE = '/api';

export async function submitContact(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch {
    return { success: false, message: 'Network error occurred. Please try again later.' };
  }
}

export async function subscribeNewsletter(email: string): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE}/newsletter`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    return await response.json();
  } catch {
    return { success: false, message: 'Network error occurred. Please try again later.' };
  }
}

export async function healthCheck(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${API_BASE}/health`);
    return await response.json();
  } catch {
    return { success: false, message: 'API is currently unreachable.' };
  }
}
