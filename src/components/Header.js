import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({title}) => {

   const onAddButtonClick = () => console.log('Click');

   return (
      <header className="header">
         <h2>{title}</h2>
         <Button text="Add" color="black" onClick={onAddButtonClick} />
         
      </header>
   )
}

Header.defaultProps = {
   title: "Task tracker"
}

Header.propTypes = {
   title: PropTypes.string.isRequired,

}

export default Header
