import React, { useRef } from 'react';
import { createPortal } from 'react-dom'
import Button from '../Button/Button';
import classes from './Modal.module.css'

const ModalPortal: React.FC = ({ children }) => {
  const element = useRef(document.getElementById('portals') as HTMLElement);

  return createPortal(children, element.current);
}

type ModalType = {
  title: string,
  message: string,
  onClickAction: () => void
}

const Modal: React.FC<ModalType> = ({ title = '', message = '', onClickAction }) => (
  <ModalPortal>
    <div className={classes.modal__container}>
      <div className={classes.modal}>
        <div className={classes.modal__header}>
          <label>{title}</label>
        </div>
        <div className={classes.modal__body}>
          <h4>{message}</h4>
          <div className={classes.modal__btn_end}>
            <Button type="button" title="Dismiss" onClick={onClickAction} />
          </div>
        </div>
      </div>
    </div>
  </ModalPortal>
)

export default Modal
