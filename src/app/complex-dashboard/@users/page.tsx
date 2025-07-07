import { Card } from '@/components/card';

export default function UserAnalytics() {
    return (
        <div className="user-analytics">
            <h2>User Analytics</h2>
            <p>Total Users: 1,000</p>
            <p>Active Users: 800</p>
            <p>New Signups Today: 50</p>
            {/* Additional user analytics can be added here */}
        </div>
    );
}