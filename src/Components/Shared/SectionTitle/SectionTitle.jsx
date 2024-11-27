import { PropTypes } from "prop-types";
const SectionTitle = ({title, subtitle}) => {
  return (
    <div style={{borderLeft: '8px solid rgba(220, 20, 60, 1)', paddingLeft: '10px', display: 'flex', flexDirection: 'column', gap: 1}}>
      <h1 style={{padding:0, margin: 0}} >{title}</h1>
      {subtitle && <p style={{padding:0, margin: 0, color: 'gray'}}>{subtitle}</p>}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SectionTitle;
