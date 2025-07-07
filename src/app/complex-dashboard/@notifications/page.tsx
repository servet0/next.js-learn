import {Card} from '@/components/card';
import Link from 'next/link';

export default function Notifications() {
    return (
        <div className="notifications">
            <h2>Notifications</h2>
            <p>You have no new notifications.</p>
            {/* Additional notification components can be added here */}
            <div>
                <Link href="/complex-dashboard/archived" >Archived</Link>     
            </div>
        </div>
    );
}