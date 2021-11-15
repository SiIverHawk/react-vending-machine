import { useRef } from 'react'
import { createPortal } from 'react-dom';
import { useTypedSelector } from '../../Hooks/useTypeSelector';
import classes from './SideDrawer.module.css'
import SideDrawerItems from './SideDrawerItems';

const SideDrawerPortal: React.FC = ({ children }) => {
  const element = useRef(document.getElementById('portals') as HTMLElement);

  return createPortal(children, element.current);
}

const SideDrawer: React.FC<IUIDrawerShow> = ({ isOpen }) => {

  const { dispatchedProducts } = useTypedSelector(state => state.products)

  return (
    <SideDrawerPortal>
      <div className={`${classes.sideDrawer} ${isOpen ? classes.open : ''}`}>
        <div className={classes.sideDrawer__header}>
          <h3 className={classes.sideDrawer__heading}>Dispatched products</h3>
        </div>
        {
          dispatchedProducts.map((item: IProduct) => (
            <SideDrawerItems key={item.id} item={item} />
          ))
        }
      </div >
    </SideDrawerPortal >
  )
}

export default SideDrawer
