import Sidebar from '../components/Sidebar';

const Layout = ({children}) => {
    return ( 
        <div className="content">
            <Sidebar />

            {children}

            
        </div>
     );
}
 
export default Layout;