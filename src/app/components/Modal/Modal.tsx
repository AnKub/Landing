import { useState } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

export default function Modal({ open, onClose }: ModalProps) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [method, setMethod] = useState('call');
  const [submitted, setSubmitted] = useState(false);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setContact('');
      setMethod('call');
      setSubmitted(false);
      onClose();
    }, 2000);
  };
// це для закриття модалки якщо клацнуть за межами модалки
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>&times;</button>
        {!submitted ? (
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              className={styles.input}
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              className={styles.input}
              type="tel"
              placeholder="Phone number"
              value={contact}
              onChange={e => setContact(e.target.value)}
              required
            />
            <div className={styles.methods}>
              <label><input type="radio" name="method" value="call" checked={method==='call'} onChange={()=>setMethod('call')} /> Call</label>
              <label><input type="radio" name="method" value="telegram" checked={method==='telegram'} onChange={()=>setMethod('telegram')} /> Telegram</label>
              <label><input type="radio" name="method" value="viber" checked={method==='viber'} onChange={()=>setMethod('viber')} /> Viber</label>
              <label><input type="radio" name="method" value="whatsapp" checked={method==='whatsapp'} onChange={()=>setMethod('whatsapp')} /> WhatsApp</label>
            </div>
            <button className={styles.ctaButton} type="submit">Send</button>
          </form>
        ) : (
          <div className={styles.successMsg}>Our specialists will contact you soon!</div>
        )}
      </div>
    </div>
  );
}
