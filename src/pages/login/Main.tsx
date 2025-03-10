import { Outlet } from 'react-router-dom';

function Main(){
    return (
        <div style={{backgroundImage: `url("/login_background.png")`}} className="bg-cover bg-center">
            <main className="min-h-screen flex flex-col items-center justify-center">
                <img alt="aqui é a logo" src='/logoipsum.svg' className="text-zinc-50 mb-8"/>
                <Outlet />
            </main>
        </div>
    )
}

export default Main;