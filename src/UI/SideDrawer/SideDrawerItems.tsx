import React from 'react'
import classes from './SideDrawer.module.css'

interface Props {
  item: IProduct;
}

const SideDrawerItems: React.FC<Props> = ({ item: { name, thumbnail } }) => {
  return (
    <div className={classes.sideDrawer__items}>
      <div className={classes.sideDrawer__items_imgbox}>
        <img className={classes.sideDrawer__items_img} src={thumbnail} alt={name} />
      </div>
      <div className={classes.sideDrawer__items_titlebox}>
        <h1 className={classes.sideDrawer__items_title}>{name}</h1>
      </div>
    </div >
  )
}

export default SideDrawerItems
