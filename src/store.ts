import { create } from 'zustand';
import { SortField, SortOrder } from './types';

interface AppState {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  sortField: SortField;
  sortOrder: SortOrder;
  setSort: (field: SortField, order: SortOrder) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  sortField: 'amountCrore',
  sortOrder: 'desc',
  setSort: (field, order) => set({ sortField: field, sortOrder: order }),
  activeSection: 'dashboard',
  setActiveSection: (section) => set({ activeSection: section }),
}));