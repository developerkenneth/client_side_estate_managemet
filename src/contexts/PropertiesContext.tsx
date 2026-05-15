/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, type ReactNode } from 'react';
import axios from 'axios';
import type { Property } from '../types';

interface PropertiesFilters extends Record<string, string> {
    search: string;
    type: string;
    min_price: string;
    max_price: string;
}

interface PropertiesContextValue {
    properties: Property[];
    loading: boolean;
    filters: PropertiesFilters;
    updateFilter: (name: keyof PropertiesFilters, value: string) => void;
    resetFilters: () => void;
}

const PropertiesContext = createContext<PropertiesContextValue | undefined>(undefined);

export const PropertiesProvider = ({ children }: { children: ReactNode }) => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);
    const [filters, setFilters] = useState<PropertiesFilters>({
        search: '',
        type: '',
        min_price: '',
        max_price: ''
    });

    // Re-fetch whenever filters change
    useEffect(() => {
        const fetchProperties = async () => {
            setLoading(true);
            try {
                const params = new URLSearchParams(filters).toString();
                const response = await axios.get(`http://localhost/estate-management-api/api/properties?${params}`);
                setProperties(response.data.data);
            } catch (error) {
                console.error("Filter Fetch Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProperties();
    }, [filters]);

    const updateFilter = (name: keyof PropertiesFilters, value: string) => {
        setFilters(prev => ({ ...prev, [name]: value }));
    };

    const resetFilters = () => {
        setFilters({ search: '', type: '', min_price: '', max_price: '' });
    };

    return (
        <PropertiesContext.Provider value={{
            properties,
            loading,
            filters,
            updateFilter,
            resetFilters
        }}>
            {children}
        </PropertiesContext.Provider>
    );
};

// Custom hook for easy access
export const useProperties = () => {
    const context = useContext(PropertiesContext);
    if (!context) {
        throw new Error('useProperties must be used within a PropertiesProvider');
    }
    return context;
};