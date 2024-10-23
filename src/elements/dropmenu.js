
import '../css/navbar.css';

function DropMenu (){
    const links = [
        {id:'Sobre nosotros', name: 'about'},
        {id:'Nuestro café', name: 'products'}, 
        {id:'Nuestr@s aliad@s', name: 'partners'}
       ];

   const navLinks = links.map(link => {
       return(
           <li key={link.id}><a href={link.name} className='drop-down--items'>{link.id}</a></li>
       )
   });

    return (
        <div className="drop-menu--mobile">
            <div className="drop-menu">
                <ul className='drop-down--list'>
                    {navLinks}
                </ul>
            </div>
        </div>

    );
};

export default DropMenu;