import React, { useRef } from 'react';

export function TextInputWithFocus() {
  // Тут ми вказуємо, що ref буде посилатися на елемент типу HTMLInputElement
  const inputEl = useRef<HTMLInputElement>(null);

  const onButtonClick = () => {
    // Поле current тепер має властивості, що є у елемента HTMLInputElement
      inputEl.current?.focus();
    };
    
    const divRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const selectRef = useRef<HTMLSelectElement>(null);

    const countRef = useRef<number>(0);

  const increment = () => {
    countRef.current += 1;
    console.log(`Поточне значення: ${countRef.current}`);
  }

  return (
    <>
      {/* Тут inputEl стане посиланням на цей input елемент */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Встановити фокус на поле введення</button>
          
      <div ref={divRef}>Це div елемент</div>
      <textarea ref={textareaRef}></textarea>
      <select ref={selectRef}></select>
          
      <button onClick={increment}>Збільшити</button>
    </>
  );
}