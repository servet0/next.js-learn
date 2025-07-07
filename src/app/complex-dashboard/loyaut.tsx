export default function ComplexDashboardLayout({ children, 
    users, 
    revenue, 
    notifications }: 
    { children: React.ReactNode
        users: React.ReactNode, 
        revenue: React.ReactNode, 
        notifications: React.ReactNode[]
     }) {
    return (
        <div className="complex-dashboard-layout">
            <header>
                <h1>Complex Dashboard</h1>
            </header>
            <nav>
                {/* Navigation links can be added here */}
            </nav>
            <main>
                <div>
                    {children}
                    </div>
                <section>
                    <div>
                        {users} 
                    </div>
                    
                    </section>

                    <div>
                        {revenue}
                    {notifications}
                    </div>
            </main>
            <aside>
              
            </aside>
        </div>
    );
}