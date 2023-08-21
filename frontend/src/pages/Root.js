import { Outlet} from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const RootLayout= () => {
    // const navigation = useNavigation();

    return <>
                <MainNavigation/>
                <main>
                    {/* {navigation.state==='loading' && <p>LOADING.......</p>} */}
                    <Outlet/>
                </main>
    </>
};

export default RootLayout;