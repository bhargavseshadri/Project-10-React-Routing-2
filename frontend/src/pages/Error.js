import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";

const ErrorPage = () => {
    const error = useRouteError();

    let title = 'AN ERROR OCCURED';
    let message = 'Some thing went wrong!!!';

    if (error.status === 500) {
        message = error.data.message;  //here we are getting this from our Event.js file 
    }

    if (error.status===404) {
        title = 'Not Found';
        message= 'Could not find resource or page';
    }

    return (
        <>
            <MainNavigation/>
            <PageContent title={title}>
                <p>{message}</p>
            </PageContent>

            {/* <MainNavigation/>
            <main>
                <h1>An error occoured!</h1>
                <p>Could not find this page!!</p>
            </main> */}
        </>
    )
};

export default ErrorPage;