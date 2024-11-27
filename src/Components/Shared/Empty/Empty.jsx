import Lottie from "lottie-react";
import emptyAnimation from '../../../assets/empty.json'
import { Typography } from "@mui/material";
import PropTypes from 'prop-types';


const Empty = ({title}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh', flexDirection: 'column'}}>
            <Typography variant="h3" sx={{color: 'rgba(0, 51, 102, 1)'}}>{title}</Typography>
            <Lottie animationData={emptyAnimation}/>
        </div>
    );
};

Empty.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Empty;