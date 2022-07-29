import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';

const Home = () => 
{
    return (
    <div className="main">

        <Outlet />
        
        <Footer title="Ezema Emmanuel, ScandiWeb Test Page" />

    </div>
    )

}

export default Home;