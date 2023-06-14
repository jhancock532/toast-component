import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";

import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState("notice");
  const { addToast } = React.useContext(ToastContext);

  const submitToastForm = (event) => {
    event.preventDefault();

    addToast(toastMessage, toastVariant, crypto.randomUUID());
    setToastMessage("");
    setToastVariant("notice");
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        className={styles.controlsWrapper}
        onSubmit={(event) => submitToastForm(event)}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              onChange={(event) => {
                setToastMessage(event.target.value);
              }}
              value={toastMessage}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant, index) => (
              <label htmlFor={`variant-notice-${index}`} key={index}>
                <input
                  id={`variant-notice-${index}`}
                  type="radio"
                  name="variant"
                  value={variant}
                  checked={toastVariant === variant}
                  onChange={(event) => {
                    setToastVariant(event.target.value);
                  }}
                />
                {variant}
              </label>
            ))}

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button type="submit">Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
