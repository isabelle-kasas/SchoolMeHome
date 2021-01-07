import React, { ReactElement } from 'react';
import { useAuth } from '../../context/authContext';
import { DashboardAdmin } from './dashboard-admin/DashboardAdmin';

export const DashboardRouting = (): ReactElement => {
    const { user } = useAuth();
    switch (user.role) {
        case 'Admin':
            return(
                <DashboardAdmin/>
            )
        default:
            return(
                <div>NON</div>
            )
    }
}