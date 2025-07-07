import {Card} from '@/components/card';
import Link from 'next/link';

export default function ArchivedNotifications() {
    return (
        <div className="notifications">
            <h2>Archived Notifications</h2>
            <p>You have no new notifications.</p>
            {/* Additional notification components can be added here */}
            <div>
                <Link href="/complex-dashboard/archived" >Default</Link>     
            </div>
        </div>
    );
}