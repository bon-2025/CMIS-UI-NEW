import { Year } from '../../components/Analytics/Year';
import { Month } from '../../components/Analytics/Month';
import { Day } from '../../components/Analytics/Day';

const Expiring = () => {
    return (
        <>
        <div className="container-fluid"><Year/></div>
       <div className="container-fluid"><Month/></div>
       <div className="container-fluid"><Day/></div>
        </>
    );
}

export default Expiring;
