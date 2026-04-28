import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Loader.scss";

const Loader = () => {
    /**GET STATES FROM STORE */
    const isLoading = useSelector((state: any) => state.loader.isLoading);
    console.log('isLoading', isLoading)
    const [visible, setVisible] = useState(false);

    // Handle transitions when isLoading changes
    useEffect(() => {
        if (isLoading) {
            setVisible(true);
        } else {

            const timer = setTimeout(() => {
                setVisible(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isLoading]);

    if (!visible && !isLoading) {
        return null;
    }
    return (
        <div className={`loader ${!isLoading ? "loader--hiding" : ""}`}>
            <div className="loaderset"></div>
        </div>
    );
};
export default Loader;
