import { ReactNode } from 'react';

interface Props {
    children: ReactNode
}

const AdminLayout = ( {children}:Props) => {
    return (
        <div className='flex bg-slate-400'>
            <aside className='bg-slate-400 p-5 mr-5'>Admin sidebar</aside>
            <main>
                 {children}
            </main>
        </div>
    );
};

export default AdminLayout;